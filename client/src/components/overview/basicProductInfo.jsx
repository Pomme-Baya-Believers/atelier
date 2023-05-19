import React from 'react';
import Star from '../starRating.jsx';
import PriceStrike from '../PriceStrike.jsx';

function BasicProductInfo({ style, product, productID }) {
  // console.log('This is the style prop ', style);
  //   console.log('This is the product prop ', product);
  return (
    <div className='basicProductInfo'>
      <div>{productID && <Star productID={productID}/>}</div>
      <h3>{product.category}</h3>
      <h1>{product.name}</h1>
      {style && <PriceStrike selectedStyle={style}/>}
    </div>
  );
}

export default BasicProductInfo;
