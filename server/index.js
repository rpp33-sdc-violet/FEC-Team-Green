const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

// Jo additions
const config = require('../client/src/config/github.js');
const axios = require('axios');

app.all('/*', (req, res, next) => {
  console.log('req method', req.method);
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

app.get('/qa/questions', (req, res) => {
  console.log('GET HERE', req.options);

  axios(req.options)
    .then((response) => {
      console.log(response.data.results.length);
      res.send(response.data);
    });
});

app.put('/qa/questions/:question_id/helpful', (req, res) => {
  console.log('PUT HERE', req.options);
  
  axios(req.options)
    .then((response) => {
      console.log('PUT RESPONSE', response);
      res.send('PUT SUCCESS');
    });
});

app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});
