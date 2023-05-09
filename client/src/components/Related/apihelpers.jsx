import axios from 'axios';

const apiHelper = {
  getProduct: (id) => axios.get('/sean', { params: { endpoint: id } }),
  getRelated: (id) => axios.get('/sean/related', { params: { endpoint: id } }),
  getStyles: (id) => axios.get('/sean/styles', { params: { endpoint: id } }),
};

export default apiHelper;
