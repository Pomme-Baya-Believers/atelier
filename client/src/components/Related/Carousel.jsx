import React from 'react';
import RelatedProductCard from './RelatedProductCard.jsx';
import apiHelper from './apihelpers.jsx';

const { useEffect, useState } = React;

const RelatedCarousel = ({ productID, setProductID }) => {
  const [related, setRelated] = useState([Number(productID)]);

  useEffect(() => {
    apiHelper.getRelated(productID)
      .then((res) => {
        console.log(res.data);
        setRelated(res.data);
      })
      .catch((err) => console.error(err));
  }, [productID]);

  const uniqueRelated = [...new Set(related)];
  const relatedComponents = uniqueRelated.map((id) => {
    return(
    <>
    <RelatedProductCard key={id} productID={id} setProductID={setProductID} />
    </>
    )
  } )


  return (
      <div className="relatedPanel">
        <div className="carousel">
          {relatedComponents}
        </div>
          <div className="fogOfWar"></div>
      </div>
    )
};

export default RelatedCarousel;
