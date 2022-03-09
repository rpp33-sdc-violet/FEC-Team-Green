const express = require('express');
const axios = require('axios');
const { createProxyMiddleware, fixRequestBody } = require('http-proxy-middleware');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
// MULTER: handles multipart/form-data, which is primarily used for uploading files
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const uploadFileToS3 = require('./s3.js');
// to remove file that multer stored in uploads directory
const { unlink } = require('fs/promises');

const app = express();
const PORT = 3000;

const path = require('path');
var shrinkRay = require('shrink-ray-current');
app.use(shrinkRay());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));

// PHOTO UPLOAD TO S3 BUCKET
app.post('/photos', upload.single('photo'), (req, res) => {
  uploadFileToS3(req.file, (error, url) => {
    if (error) {
      res.status(500).send('error in uploading photo');
    } else {
      // remove file and then send url back to client to render
      unlink(req.file.path)
        .then((response) => {
          res.send(url);
        })
        .catch((error) => {
          console.log('did not delete file in uploads directory');
        });
    }
  });
});

// COOKIES - In QA widget, need to persist data whether helpful links have been clicked or not
app.use(cookieParser());
// FOR HELPFUL QUESTIONS
app.all('*', function (req, res, next) {
  if (req.url.includes('questions') && req.url.includes('helpful')) {
    let findQuestionID = req.url.split('/');
    let questionID = findQuestionID[4];
    let helpfulQ = `helpfulQ_${questionID}`; // set cookie name dynamically based on question_id
    let cookie = req.cookies[helpfulQ];
    // if there isn't a helpfulQ cookie
    if (cookie === undefined) {
      // add helpfulQ cookie with clicked
      res.cookie(helpfulQ, 'clicked');
      next();
    } else {
      res.status(500).send('Helpful Question Link Clicked Already');
      // DON'T CALL next() -> we don't want to reach the API and increment helpful count
    }
  } else {
    next();
  }
});

// FOR HELPFUL ANSWERS
app.all('*', function (req, res, next) {
  if (req.url.includes('answers') && req.url.includes('helpful')) {
    let findAnswerID = req.url.split('/');
    let answerID = findAnswerID[4];
    let helpfulA = `helpfulA_${answerID}`;
    let cookie = req.cookies[helpfulA];
    if (cookie === undefined) {
      res.cookie(helpfulA, 'clicked');
      next();
    } else {
      res.status(500).send('Helpful Answer Link Clicked Already');
    }
  } else {
    next();
  }
});

// const config = require('../client/src/config/github.js'); <-- REPLACED WITH DOTENV CONFIG
require('dotenv').config({path: './server/.env'}); // <-- retrieve Github API Key in our .env file
const GITHUB_API_KEY = process.env.GITHUB_API_KEY;
// when you send a request to the '/api/**' endpoint, it automatically re-routed to the API server(done by pathRewrite)
const options = {
  target: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp', //target host
  changeOrigin: 'true', //needed for virtual hosted sites
  headers: {
    'Authorization': GITHUB_API_KEY
  },
  pathRewrite: {
    '^/api/': '/'
  },
  logLevel: 'error', //control the amount of logging of http-proxy-middleware
  onProxyReq: fixRequestBody, // used to fix proxied POST requests when bodyParser is applied before this middleware
};

//when the base of the requested path matches path specified in app.use
//middleware function excuted, create the proxy and mount it in web server
// use proxy middleware and created '/api' endpoint that communicates with our real API
app.use('/api/*', createProxyMiddleware(options));



app.get('*', (req, res) => {
  // res.send('data');
  res.sendFile(path.join(__dirname + '../../client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});
