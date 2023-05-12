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
    axios.get(options.url, { headers: options.headers })
      .then(({ data }) => res.status(200).send(data))
      .catch((err) => res.status(500).send(err));
  },
  getProduct: (req, res) => {
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

  getCart: (req, res) => {
    const options = {
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/cart',
      headers: {
        Authorization: `${process.env.API_TOKEN}`,
      },
    };

    axios.get(options.url, { headers: options.headers })
      .then(({ data }) => res.status(200).send(data))
      .catch((err) => res.status(500).send(err));
  },

  postCart: (req, res) => {
    const options = {
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/cart',
      headers: {
        Authorization: `${process.env.API_TOKEN}`,
      },
    };
    console.log('This is the req that the Cart Post sees ', req.body);
    axios.post(options.url, req.body, { headers: options.headers })
      .then(({ data }) => res.status(201).send(data))
      .catch((err) => res.status(500).send(err));
  },
};
