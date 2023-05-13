const axios = require('axios');

const get = (req, res) => {
  const options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews${req.query.endpoint}`,
    headers: {
      Authorization: `${process.env.API_TOKEN}`,
    },
  };

  axios.get(options.url, { headers: options.headers })
    .then(({ data }) => res.status(200).send(data))
    .catch((err) => res.status(500).send(err));
};

const post = (req, res) => {
  const newReview = JSON.parse(JSON.stringify(req.body));
  newReview.photos = [];
  newReview.characteristics = JSON.parse(newReview.characteristics);
  newReview.product_id = Number(newReview.product_id);
  newReview.rating = Number(newReview.rating);
  newReview.recommend = Boolean(newReview.recommend);
  req.files.forEach((photo) => {
    newReview.photos.push(photo.path.slice(12, photo.path.length));
  });

  const options = {
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews',
    headers: {
      Authorization: `${process.env.API_TOKEN}`,
    },
  };

  axios.post(options.url, newReview, { headers: options.headers })
    .then(() => res.status(204).send())
    .catch((err) => res.status(500).send(err));
};

module.exports = { get, post };
