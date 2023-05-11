import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BasicProductInfo from './basicProductInfo.jsx';
import StyleSelector from './styleSelector.jsx';
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
      .then(({ data }) => { setStyles(data.results); console.log('This is what the getStyles API Call is making ', styles); })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getProduct(productID);
    getStyles(productID);
  }, []);

  const handleStyleClick = (target) => {
    console.log(target);
    setStyle(target);
  };

  return (
    <div>
      This is the Overview
      <BasicProductInfo style={styles[style]} product={product} productID={productID}/>
      <StyleSelector product={product} styles={styles}
      style={style} handleStyleClick={handleStyleClick}/>
    </div>
  );
}

export default Overview;
