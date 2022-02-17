const express = require('express');
const axios = require('axios');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static(__dirname + '/../client/dist'));


const config = require('../client/src/config/github.js');

app.all('*', function (req, res, next) {
  console.log('REQUEST', req.url);
  if (req.url.includes('questions') && req.url.includes('helpful')) {
    console.log('HERE');
  }
  next(); // pass control to the next handler
});

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
