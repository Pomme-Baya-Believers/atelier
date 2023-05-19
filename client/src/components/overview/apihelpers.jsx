import axios from 'axios';

const apiHelper = {
  getProduct: (id, setProduct) => {
    axios.get('/matthew/product', { params: { endpoint: `${id}` } })
      .then(({ data }) => setProduct(data))
      .catch((err) => console.error(err));
  },

  getStyles: (id, setStyles) => {
    axios.get('/matthew/styles', { params: { endpoint: `${id}` } })
      .then(({ data }) => { setStyles(data.results); })
      .catch((err) => console.error(err));
  },

  addToCart: (item, amount) => {
    for (let i = 0; i < amount; i += 1) {
      axios.post('/matthew/cart', { sku_id: item.sku_id })
        .then((response) => {
          console.log('Congrats you added things to the cart', response);
        })
        .catch((response) => {
          console.log('There was an error posting the items to the Cart ', response);
        });
    }
  },

  starRating: (productID, setAverageRating) => {
    axios.get('/matthew/meta', { params: { endpoint: `?product_id=${productID}` } })
      .then((response) => {
        const { ratings } = response.data;
        let totalScore = 0;
        let totalRatings = 0;
        for (const [key,value] of Object.entries(ratings)) {
          totalScore += (key * value);
          totalRatings += Number(value)
          // console.log('This is the average rating', totalScore / totalRatings)
          setAverageRating(totalScore / totalRatings)
        }
      });
  },

  getRating: (productID, setReviewsNumber) => {
    axios.get('/matthew/meta', { params: { endpoint: `?product_id=${productID}` } })
      .then((response) => {
        const { ratings } = response.data;
        let totalRatings = 0;
        for (const [key,value] of Object.entries(ratings)) {
          totalRatings += Number(value)
          setReviewsNumber(totalRatings)
        }
      });
  },
};

export default apiHelper;
