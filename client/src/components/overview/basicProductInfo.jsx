import React, { useState, useEffect } from 'react';
import Star from '../starRating.jsx';
import PriceStrike from '../PriceStrike.jsx';
import apiHelper from './apihelpers.jsx';

function BasicProductInfo({ style, product, productID }) {
  // console.log('This is the style prop ', style);
  //   console.log('This is the product prop ', product);
  const [reviewsNumber, setReviewsNumber] = useState(0);

  useEffect(() => {
    apiHelper.getRating(productID, setReviewsNumber);
  }, [productID]);

  return (
    <div className='basicProductInfo'>
      {reviewsNumber > 0 && <div>{productID && <Star productID={productID}/>}</div>}
      {reviewsNumber > 0 && <a href='#reviewComponent' > Read all {reviewsNumber} reviews</a>}
      <h3>{product.category}</h3>
      <h1>{product.name}</h1>
      {style && <PriceStrike selectedStyle={style}/>}
    </div>
  );
}

export default BasicProductInfo;
