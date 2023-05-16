import React from 'react';
import RelatedProductCard from './RelatedProductCard.jsx';
import EmptyCard from './EmptyCard.jsx';

const { useState } = React;

const RelatedCarousel = ({
  numberOfTiles, productID, setProductID, relatedList, mainData,
}) => {
  console.log("RELATED LIST", relatedList)
  let uniqueRelated = [];
  let slicedRelated = [];
  let relatedComponents = [];
  const [position, setPosition] = useState(0);
  const clickRightArrow = () => {
    console.log('Right ARROW CLICKED');
    if (position + 2 < relatedList.length) { setPosition(position + 1); }
  };
  const clickLeftArrow = () => {
    console.log('Left ARROW CLICKED');
    if (position > 0) { setPosition(position - 1); }
  };
  uniqueRelated = [...new Set(relatedList)];

  slicedRelated = uniqueRelated.slice(position, numberOfTiles + position);
  // eslint-disable-next-line arrow-body-style
  relatedComponents = slicedRelated.map((id) => {
    return (
    <RelatedProductCard key={id} thisID={id} productID={productID}
    setProductID={setProductID} setPosition={setPosition} mainData={mainData}/>
    );
  });

  if (relatedList === undefined) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < numberOfTiles; i++) {
      relatedComponents.push(<EmptyCard key={i} productID={productID}/>);
    }
  }

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
