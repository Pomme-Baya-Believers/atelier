import axios from 'axios';

const apiHelper = {

  getReviews: (count, sort, id, setReviews) => {
    axios.get('/naru', { params: { endpoint: `?count=${count}&sort=${sort}&product_id=${id}` } })
      .then(({ data }) => setReviews(data))
      .catch((err) => console.error(err));
  },

  getMeta: (id, setMeta) => {
    axios.get('/naru', { params: { endpoint: `/meta?product_id=${id}` } })
      .then(({ data }) => setMeta(data))
      .catch((err) => console.error(err));
  },

  postReview: (newReview) => {
    axios.post('/naru', newReview)
      .catch((err) => console.error(err));
  },
};

export default apiHelper;
