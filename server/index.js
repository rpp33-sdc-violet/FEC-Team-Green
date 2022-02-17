const express = require('express');
const axios = require('axios');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

// COOKIES - In QA widget, need to persist data whether helpful links have been clicked or not
app.use(cookieParser());
app.all('*', function (req, res, next) {
  // FOR HELPFUL QUESTIONS
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

  // FOR HELPFUL ANSWERS -- TODO!!**********
});

const config = require('../client/src/config/github.js');

// when you send a request to the '/api/**' endpoint, it automatically re-routed to the API server(done by pathRewrite)
const options = {
  target: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp', //target host
  changeOrigin: 'true', //needed for virtual hosted sites
  headers: {
    'Authorization': config
  },
  pathRewrite: {
    '^/api/': '/'
  },
  logLevel: 'error', //control the amount of logging of http-proxy-middleware
};

//when the base of the requested path matches path specified in app.use
//middleware function excuted, create the proxy and mount it in web server
// use proxy middleware and created '/api' endpoint that communicates with our real API
app.use('/api/*', createProxyMiddleware(options));


app.get('*', (req, res) => {
  res.send(data);
});

app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});
