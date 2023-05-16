import React from 'react';
import Star from '../starRating.jsx';
import PriceStrike from '../PriceStrike.jsx';

function BasicProductInfo({ style, product, productID }) {
  // console.log('This is the style prop ', style);
  //   console.log('This is the product prop ', product);
  return (
    <div>
      Basic Product Info and stuff
      <div>{productID && <Star productID={productID}/>}</div>
      <div>Category: {product.category}</div>
      <div>Product Title: {product.name}</div>
      {style && <PriceStrike selectedStyle={style}/>}
    </div>
  );
}

export default BasicProductInfo;
