import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BasicProductInfo from './basicProductInfo.jsx';
import StyleSelector from './styleSelector.jsx';
import ProductDescription from './productDescription.jsx';
import AddToCart from './addToCart.jsx';
import ImageGallery from './imageGallery.jsx';
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
      .then(({ data }) => { setStyles(data.results); console.log('This is what the getStyles API Call is making ', data.results); })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getProduct(productID);
    getStyles(productID);
  }, [productID]);

  const handleStyleClick = (target) => {
    console.log(target);
    setStyle(target);
  };

  return (
    <div>
      {styles.length > 0 && <ImageGallery styles={styles} style={style}/>}
      <BasicProductInfo style={styles[style]} product={product} productID={productID}/>
      <ProductDescription product={product}/>
      {product && styles && <AddToCart product={product} options={styles[style]}/>}
      <StyleSelector product={product} styles={styles}
      style={style} handleStyleClick={handleStyleClick}/>
    </div>
  );
}

export default Overview;
