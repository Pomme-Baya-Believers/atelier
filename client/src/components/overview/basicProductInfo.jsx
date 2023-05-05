import React, { useState } from 'react';

function BasicProductInfo({ style, product }) {
  console.log('This is the style prop ', style);
  console.log('This is the product prop ', product);
  return (
    <div>
      Basic Product Info
      <div>Star Rating</div>
      <div>Category: {product.category}</div>
      <div>Product Title: {product.name}</div>
      <div>Price info</div>
    </div>
  );
}

export default BasicProductInfo;
