const axios = require('axios');

module.exports = {

  getDetails: (req, res) => {
    const options = {
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${req.query.endpoint}`,
      headers: {
        'Authorization': `${process.env.API_TOKEN}`
      }
    };

    axios.get(options.url, { headers: options.headers })
      .then(({ data }) => res.status(200).send(data))
      .catch((err) => res.status(500).send(err));
  },

  getMeta: (req, res) => {
    const options = {
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta${req.query.endpoint}`,
      headers: {
        'Authorization': `${process.env.API_TOKEN}`,
      },
    };
    console.log('Meta data was requested from the Client', req.query);
    axios.get(options.url, { headers: options.headers })
      .then(({ data }) => res.status(200).send(data))
      .catch((err) => res.status(500).send(err));
  },
};
