import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BasicProductInfo from './basicProductInfo.jsx';
import ProductDescription from './ProductDescription.jsx';
import '../../assets/styles.css';

function Overview({ productID }) {
  const [product, setProduct] = useState([]);
  const [styles, setStyles] = useState([]);
  const [style, setStyle] = useState(0);

  const getProduct = (id) => {
    axios.get('/matthew/product', { params: { endpoint: `${id}` } })
      .then(({ data }) => setProduct(data))
      .catch((err) => console.error(err));
  };

  const getStyles = (id) => {
    axios.get('/matthew/styles', { params: { endpoint: `${id}` } })
      .then(({ data }) => setStyles(data.results))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getProduct(productID);
    getStyles(productID);
  }, []);

  return (
    <div>
      This is the Overview and some other stuff
      <BasicProductInfo style={styles[style]} product={product}/>
      <ProductDescription product={product}/>
    </div>
  );

};


export default Overview;
