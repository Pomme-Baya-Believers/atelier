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
    <div>
      <div>{product.slogan}</div>
      <div>Product Description: {product.description}</div>
      {product.features && product.features.map((feature) =>
      <div key={feature.feature}>{feature.feature}: {feature.value}</div>)}
      <div>Social Media Links</div>
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

  );
}

export default ProductDescription;
