import React, { useState } from 'react';
import axios from 'axios';

const Overview = () => {
  const getProduct = (count, sort, id) => {
    axios.get('/matthew', { params: { endpoint: `?count=${count}&sort=${sort}&product_id=${id}` } })
      .then(({ data }) => console.log(data))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      This is the Overview
    </div>
  );
};

export default Overview;
