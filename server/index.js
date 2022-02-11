const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

// FROM G-LEARN: Instead consider setting up a wildcard route, "/*" which is capable of capturing the req.method and req.url from the incoming request, attaching the Authentication header, and making the same request to the API server, before capturing the response data and sending it back to the client.
const config = require('../client/src/config/github.js');
// I used axios to test out some API calls but we can eventually move this the controller files.
const axios = require('axios'); 

// WILDCARD ROUTE: using app.all (found it in the express docs: https://expressjs.com/en/guide/routing.html)
app.all('/*', (req, res, next) => {
  req.options = {
    method: req.method,
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp${req.url}`,
    headers: {
      Authorization: config
    }
  };
  console.log('req.options', req.options);

  next();
});

// SOME EXAMPLE CALLS TO THE API -- I WILL EVENTUALLY PUT THESE INSIDE A SEPARATE FILE FOR QA RELATED CALLS TO THE API
app.get('/qa/questions', (req, res) => {
  console.log('QA GET HERE', req.options);

  axios(req.options)
    .then((response) => {
      res.send(response.data);
    });
});

app.put('/qa/questions/:question_id/helpful', (req, res) => {
  console.log('QA PUT HERE', req.options);
  
  axios(req.options)
    .then((response) => {
      res.send('PUT SUCCESS');
    });
});

app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});
