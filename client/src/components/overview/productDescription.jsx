import React from 'react';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, PinterestShareButton, PinterestIcon } from 'react-share';

function ProductDescription({ product }) {
  // console.log('This is the product prop', product);

  // const divStyle = {
  //   transform: rotate("45deg");
  //   height: 45px;
  //   width: 20px;
  //   margin-left: 50%;
  //   border-bottom: 9px solid darkolivegreen;
  //   border-right: 9px solid darkolivegreen;
  // }

  // Need to add in checkmark styling for features
  return (
    <div className='overviewProductDescription'>
      <div className='lengthyDesc'>
        <h2>{product.slogan}</h2>
        {product.description}</div>
      <div className='featureDesc'>
      {product.features && product.features.map((feature) =>
      <h5 key={feature.feature}>&#x2714;  {feature.feature}: {feature.value}</h5>)}
      <h4>Social Media Links</h4>
        <FacebookShareButton url={'https://www.example.com'} quote={'Some Text'} hashtag={`#${product.name}`}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton url={'https://www.example.com'} title={`${product.name}`}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <PinterestShareButton url={'https://www.example.com'} media={'https://www.example.com'} description={`${product.name}`}>
          <PinterestIcon size={32} round />
        </PinterestShareButton>
        </div>
    </div>

  );
}

export default ProductDescription;
