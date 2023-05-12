import React from 'react';
import RelatedProductCard from './RelatedProductCard.jsx';
import AddProductCard from './AddProductCard.jsx';
import MyOutfitCard from './MyOutfitCard.jsx';

const {useState} = React;

let uniqueRelated = [];
let slicedRelated = [];
let relatedComponents = [];

const CarouselYourOutfit = ({
  numberOfTiles, productID, setProductID, related, relatedBool, mainData, storage, setStorage,
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


    uniqueRelated = storage;

  slicedRelated = uniqueRelated;
  console.log('SLICEDRELATED', slicedRelated)
  slicedRelated = slicedRelated.slice(position, numberOfTiles + position);
  relatedComponents = slicedRelated.map((product) => {
    return (
    <MyOutfitCard key={product.id} related={relatedBool} data={product} thisID={product.id} productID={productID}
    setProductID={setProductID} setPosition={setPosition} setStorage={setStorage} mainData={mainData}/>
    );
  });

  const leftArrow = position > 0
    ? <div className ="relatedArrow" onClick={clickLeftArrow}> {'<'} </div>
    : <div className ="relatedArrowOFF" > {'<'} </div>;

  const rightArrow = position + numberOfTiles < uniqueRelated.length
    ? <div className ="relatedArrow" onClick={clickRightArrow}> {'>'} </div>
    : <div className ="relatedArrowOFF"> {'>'} </div>;

  if (relatedComponents.length < 1) {
    relatedComponents[0] = <>
    <AddProductCard key={1} mainData={mainData} setStorage={setStorage}/>
    </>
  } else (
    relatedComponents.unshift(
      <AddProductCard mainData={mainData} setStorage={setStorage}/>

    )

  )

  return (
    <>
        <div className='relatedCarouselTitle'> My Outfit</div>
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
