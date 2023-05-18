import React, { useState, useEffect } from 'react';
import BasicProductInfo from './basicProductInfo.jsx';
import StyleSelector from './styleSelector.jsx';
import ProductDescription from './productDescription.jsx';
import AddToCart from './addToCart.jsx';
import ImageGallery from './imageGallery.jsx';
import apiHelper from './apihelpers.jsx';

function Overview({ productID }) {
  const [product, setProduct] = useState([]);
  const [styles, setStyles] = useState([]);
  const [style, setStyle] = useState(0);

  useEffect(() => {
    apiHelper.getProduct(productID, setProduct);
    apiHelper.getStyles(productID, setStyles);
  }, [productID]);

  const handleStyleClick = (target) => {
    console.log(target);
    setStyle(target);
  };

  return (
    <div className ='mainOverview'>
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
