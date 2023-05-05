import React from 'react';
import RelatedProductCard from './RelatedProductCard.jsx';
import apiHelper from './apihelpers.jsx';
import axios from 'axios';

const {useEffect, useState} = React;

const RelatedCarousel = ({ productID, setProductID }) => {
  const [related, setRelated] = useState([]);

  useEffect(() => {
    apiHelper.getRelated(productID)
      .then((res) => {
        console.log(res.data);
        setRelated(res.data.related);
      })
      .catch((err) => console.error(err));
    }, []);

    console.log(related)

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
};

export default RelatedCarousel;
