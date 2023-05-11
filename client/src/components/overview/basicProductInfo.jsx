import React from 'react';
import Star from '../starRating.jsx';
import "../../assets/styles.css";

function BasicProductInfo({ style, product, productID }) {
//   console.log('This is the style prop ', style);
//   console.log('This is the product prop ', product);
  return (
    <div>
      Basic Product Info
      <div>{product && <Star productID={productID}/>}</div>
      <div>Category: {product.category}</div>
      <div>Product Title: {product.name}</div>
      <div>Price info</div>
    </div>
  );
}

export default BasicProductInfo;
