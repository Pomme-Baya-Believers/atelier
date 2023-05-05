const axios = require('axios');

exports.get = (req, res) => {
  // console.log( "CONNECTED"  ,req)
  let options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40453`, //${req.query.endpoint}
    headers: {
      'Authorization': `${process.env.API_TOKEN}`
    },
  };//

  axios.get(options.url, { headers: options.headers })
    .then(({ data }) => res.status(200).send(data))
    .catch((err) => res.status(500).send(err));
}

// const getReviews = (count, sort, id) => {
//   axios.get('/naru', {params: {endpoint: `?count=${count}&sort=${sort}&product_id=${id}`}})
//     .then(({data}) => console.log(data))
//     .catch(err => console.error(err))
// }


