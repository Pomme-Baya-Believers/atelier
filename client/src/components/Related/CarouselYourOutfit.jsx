import React from 'react';
import RelatedProductCard from './RelatedProductCard.jsx';
import EmptyProductCard from './EmptyProductCard.jsx';

const {useState} = React;

let uniqueRelated = [];
let slicedRelated = [];
let relatedComponents = [];

const CarouselYourOutfit = ({
  numberOfTiles, productID, setProductID, related, relatedBool, mainData,
}) => {
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
    console.log(relatedBool)
  }
  console.log(relatedBool, uniqueRelated)
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

  if (relatedComponents.length < 1) {
    relatedComponents[0] = <EmptyProductCard key={['empty']} mainData={mainData}/>
  }

  return (
    <>
          YOUR CarouselYourOutfit
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

export default CarouselYourOutfit;
