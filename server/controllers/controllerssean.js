const axios = require('axios');

const get = (req, res) => {
  let options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${req.query.endpoint}`, //${req.query.endpoint}
    headers: {
      'Authorization': `${process.env.API_TOKEN}`
    },
  };//

  axios.get(options.url, { headers: options.headers })
    .then(({ data }) => res.status(200).send(data))
    .catch((err) => res.status(500).send(err));
};


const getRelated = (req, res) => {
  console.log('HELLOOOOOOO', req.query.endpoint)
  let options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${req.query.endpoint}/related`, //${req.query.endpoint}
    headers: {
      'Authorization': `${process.env.API_TOKEN}`
    },
  };//

  axios.get(options.url, { headers: options.headers })
    .then(({ data }) => res.status(200).send(data))
    .catch((err) => res.status(500).send(err));
};


module.exports = { get, getRelated };
