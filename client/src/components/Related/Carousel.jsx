import React from 'react';
import RelatedProductCard from './RelatedProductCard.jsx';
import apiHelper from './apihelpers.jsx';

const { useEffect, useState, useRef } = React;
let uniqueRelated = [];
let slicedRelated = [];
let relatedComponents = [];

const RelatedCarousel = ({numberOfTiles, productID, setProductID, position, setPosition, related, setRelated }) => {
  console.log({numberOfTiles});
  console.log({position})
  console.log({related})


  const clickRightArrow = () => {
    console.log('ARROW CLICKED');
    if (position + 2 < related.length) {setPosition(position + 1); }
  };
  const clickLeftArrow = () => {
    console.log('ARROW CLICKED');
    if (position > 0) { setPosition(position - 1); }
  };

  uniqueRelated = [...new Set(related)];
  slicedRelated = uniqueRelated
  slicedRelated = slicedRelated.slice(position, numberOfTiles + position);
  relatedComponents = slicedRelated.map(id => {
    return (
    <RelatedProductCard key={id} productID={id} setProductID={setProductID} setPosition={setPosition} />
    )});



    const leftArrow = position > 0
      ? <div className ="relatedArrow" onClick={clickLeftArrow}> {'<'} </div>
      : <div className ="relatedArrowOFF" > {'<'} </div>;

  const rightArrow = position + numberOfTiles < uniqueRelated.length
    ? <div className ="relatedArrow" onClick={clickRightArrow}> {'>'} </div>
    : <div className ="relatedArrowOFF"> {'>'} </div>;


  return (
      <div className="relatedPanel">
          <div className="relatedFogOfWarL">
             {leftArrow}
          </div>
          {/* <div> */}
            <div className="relatedCarousel">
              {relatedComponents}
            {/* </div> */}
          </div>
          <div className="relatedFogOfWarR">
            {rightArrow}
          </div>
      </div>
  );
};

export default RelatedCarousel;
