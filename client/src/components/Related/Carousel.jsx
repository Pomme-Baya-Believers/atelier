import React from 'react';
import RelatedProductCard from './RelatedProductCard.jsx';
import axios from 'axios';

const {useEffect} = React;

const RelatedCarousel = ({productID, setProductID}) => {

  console.log(productID)


  return (
    <div className="carousel">
    <RelatedProductCard productID={productID} setProductID={setProductID} />
    <RelatedProductCard productID={productID} setProductID={setProductID} />
    <RelatedProductCard productID={productID} setProductID={setProductID} />
    <RelatedProductCard productID={productID} setProductID={setProductID} />
    <RelatedProductCard productID={productID} setProductID={setProductID} />
    <RelatedProductCard productID={productID} setProductID={setProductID} />
    <RelatedProductCard productID={productID} setProductID={setProductID} />
    <RelatedProductCard productID={productID} setProductID={setProductID} />
    <RelatedProductCard productID={productID} setProductID={setProductID} />

    </div>
    )
}

export default RelatedCarousel;