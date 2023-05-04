import React from 'react';
import RelatedProductCard from './RelatedProductCard.jsx';

const RelatedCarousel = ({productID, setProductID}) => {

  return (
    <div className="carousel">
    <RelatedProductCard productID={productID} setProductID={setProductID} />
    <RelatedProductCard productID={productID} setProductID={setProductID} />
    <RelatedProductCard productID={productID} setProductID={setProductID} />
    <RelatedProductCard productID={productID} setProductID={setProductID} />
    <RelatedProductCard productID={productID} setProductID={setProductID} />

    </div>
    )
}

export default RelatedCarousel;