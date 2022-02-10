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
  req.options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp${req.url}`,
    headers: {
      Authorization: config
    }
  };

  next();
});

app.get('/qa/questions', (req, res, next) => {
  console.log('req.options HERE', req.options);

  axios(req.options)
    .then((response) => {
      console.log(response.data.results.length);
      res.send(response.data);
    });

});




app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});
