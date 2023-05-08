import React from 'react';
import '../../assets/styles.css';

function ProductDescription({ product }) {
  console.log('This is the product prop', product);

  const divStyle = {
    transform: rotate(45deg);
    height: 45px;
    width: 20px;
    margin-left: 50%;
    border-bottom: 9px solid darkolivegreen;
    border-right: 9px solid darkolivegreen;
  }
  return (
      // <div>Product Description: {product.description}</div>
      <div>{product.slogan}</div>
  );
}

export default ProductDescription;
