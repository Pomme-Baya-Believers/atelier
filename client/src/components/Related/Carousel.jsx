import React from 'react';
import RelatedProductCard from './RelatedProductCard.jsx';
import EmptyCard from './EmptyCard.jsx';

const { useState } = React;

const RelatedCarousel = ({
  numberOfTiles, productID, setProductID, related, relatedBool, mainData, setCarouselShadow,
}) => {
  let uniqueRelated = [];
  let slicedRelated = [];
  let relatedComponents = [];
  const [position, setPosition] = useState(0);
  const clickRightArrow = () => {
    console.log('Right ARROW CLICKED');
    if (position + 2 < related.length) { setPosition(position + 1); }
  };
  const clickLeftArrow = () => {
    console.log('Left ARROW CLICKED');
    if (position > 0) { setPosition(position - 1); }
  };

  if (relatedBool) {
    uniqueRelated = [...new Set(related)];
  }

  slicedRelated = uniqueRelated;
  slicedRelated = slicedRelated.slice(position, numberOfTiles + position);
  // eslint-disable-next-line arrow-body-style
  relatedComponents = slicedRelated.map((id) => {
    return (
    <RelatedProductCard key={id} related={relatedBool} thisID={id} productID={productID}
    setProductID={setProductID} setPosition={setPosition} mainData={mainData}/>
    );
  });

  if (related === undefined) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < numberOfTiles; i++) {
      relatedComponents.push(<EmptyCard productID={productID}/>);
    }
  }

  const leftArrow = position > 0
    ? <div className ="relatedArrow" onClick={clickLeftArrow}> {'<'} </div>
    : <div className ="relatedArrowOFF" > {'<'} </div>;

  const rightArrow = position + numberOfTiles < uniqueRelated.length
    ? <div className ="relatedArrow" onClick={clickRightArrow}> {'>'} </div>
    : <div className ="relatedArrowOFF"> {'>'} </div>;

  if (position + numberOfTiles < uniqueRelated.length && position > 0) {
    setCarouselShadow('relatedCarouselBoth');
  } else if (position > 0) {
    setCarouselShadow('relatedCarouselLeft');
  } else if (position + numberOfTiles < uniqueRelated.length) {
    setCarouselShadow('relatedCarouselRight');
  }

  return (
    <>
      <div className='relatedCarouselTitle'> Similar Items</div>
      <div className="relatedPanel">
          <div className="relatedFogOfWarL">{leftArrow}</div>
            <div className='relatedCarousel'>
              {relatedComponents}
            </div>
          <div className="relatedFogOfWarR">{rightArrow}</div>
      </div>
    </>
  );
};

export default RelatedCarousel;
