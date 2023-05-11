import React from 'react';
import RelatedProductCard from './RelatedProductCard.jsx';

const {useState} = React;

let uniqueRelated = [];
let slicedRelated = [];
let relatedComponents = [];

const RelatedCarousel = ({
  numberOfTiles, productID, setProductID, related, relatedBool, mainData,
}) => {
  // console.log(mainData);
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
  relatedComponents = slicedRelated.map((id) => {
    return (
    <RelatedProductCard key={id} related={relatedBool} thisID={id} productID={productID}
    setProductID={setProductID} setPosition={setPosition} mainData={mainData}/>
    );
  });

  const leftArrow = position > 0
    ? <div className ="relatedArrow" onClick={clickLeftArrow}> {'<'} </div>
    : <div className ="relatedArrowOFF" > {'<'} </div>;

  const rightArrow = position + numberOfTiles < uniqueRelated.length
    ? <div className ="relatedArrow" onClick={clickRightArrow}> {'>'} </div>
    : <div className ="relatedArrowOFF"> {'>'} </div>;

  return (
    <>
        <div className='relatedCarouselTitle'> Similar Items</div>
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
    </>
  );
};

export default RelatedCarousel;
