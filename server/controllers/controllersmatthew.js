const axios = require('axios');

module.exports = {

  getDetails: (req, res) => {
    const options = {
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${req.query.endpoint}`,
      headers: {
        Authorization: `${process.env.API_TOKEN}`,
      },
    };

    axios.get(options.url, { headers: options.headers })
      .then(({ data }) => res.status(200).send(data))
      .catch((err) => res.status(500).send(err));
  },

  getMeta: (req, res) => {
    const options = {
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta${req.query.endpoint}`,
      headers: {
        Authorization: `${process.env.API_TOKEN}`,
      },
    };
    // console.log('Meta data was requested from the Client', req.query);
    axios.get(options.url, { headers: options.headers })
      .then(({ data }) => res.status(200).send(data))
      .catch((err) => res.status(500).send(err));
  },
  getProduct: (req, res) => {
    // console.log('Just got a products request from Overview');
    const options = {
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${req.query.endpoint}`,
      headers: {
        Authorization: `${process.env.API_TOKEN}`,
      },
    };

    axios.get(options.url, { headers: options.headers })
      .then(({ data }) => res.status(200).send(data))
      .catch((err) => res.status(500).send(err));
  },

  getStyles: (req, res) => {
    // console.log('Just got a styles request from Overview');
    const options = {
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${req.query.endpoint}/styles`,
      headers: {
        Authorization: `${process.env.API_TOKEN}`,
      },
    };

    axios.get(options.url, { headers: options.headers })
      .then(({ data }) => res.status(200).send(data))
      .catch((err) => res.status(500).send(err));
  },
};
