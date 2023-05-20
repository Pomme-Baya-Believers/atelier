import React, { useContext, useEffect } from 'react';
import AddProductCard from './AddProductCard.jsx';
import MyOutfitCard from './MyOutfitCard.jsx';
import { ProductContext } from '../../index.jsx';

const { useState } = React;

let slicedRelated = [];
let relatedComponents = [];

const CarouselYourOutfit = ({
  numberOfTiles, relatedList,
  mainData, storage, setStorage, styles, //productID, setProductID,
}) => {
  const [position, setPosition] = useState(0);
  const [productID, setProductID] = useContext(ProductContext);

  let included;
  let relatedProducts = JSON.parse(localStorage.getItem('MyOutfit'));
  relatedProducts = relatedProducts.map((item) => {
    return item.id
  })
  if (relatedProducts.includes(productID)) {
    included = true;
    numberOfTiles ++;
  }

  const clickRightArrow = () => {
    console.log('Right ARROW CLICKED');
  };
  const clickLeftArrow = () => {
    console.log('Left ARROW CLICKED');
  };
  slicedRelated = storage;
  relatedComponents = slicedRelated.map((product) => (
      <MyOutfitCard key={product.id}
        data={product} thisID={product.id} productID={productID}
      setProductID={setProductID} setPosition={setPosition}
        setStorage={setStorage} mainData={mainData}/>
  ));
  let leftArrow = <div className ="relatedArrowOFF" > {'<'} </div>;
  let rightArrow = <div className ="relatedArrowOFF"> {'>'} </div>;
  let leftFogOfWar = <div className="relatedFogOfWarL">{leftArrow}</div>;
  if ((included && position + numberOfTiles <= storage.length)
    || position + numberOfTiles <= storage.length) {
    leftArrow = <div className ="relatedArrow" onClick={clickLeftArrow}> {'<'} </div>;
    rightArrow = <div className ="relatedArrow" onClick={clickRightArrow}> {'>'} </div>;
    leftFogOfWar = <div className="relatedFogOfWarLActive">{leftArrow}</div>;
  }

  if (relatedComponents.length < 1) {
    relatedComponents[0] = <AddProductCard key='1' mainData={mainData}
      styles={styles.results} setStorage={setStorage}/>;
  } else {
    relatedComponents.unshift(
      <AddProductCard key='1' mainData={mainData} styles={styles.results} setStorage={setStorage}/>,
    );
  }

  useEffect(() => {
    const slider = document.getElementById('my-carousel');
    let mouseDown = false;
    let startX, scrollLeft;

    const startDragging = function (e) {
      mouseDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };
    const stopDragging = function (event) {
      mouseDown = false;
    };

    slider.addEventListener('mousemove', (e) => {
      e.preventDefault();
      if (!mouseDown) { return; }
      const x = e.pageX - slider.offsetLeft;
      const scroll = x - startX;
      slider.scrollLeft = scrollLeft - scroll;
    });

    // Add the event listeners
    slider.addEventListener('mousedown', startDragging, false);
    slider.addEventListener('mouseup', stopDragging, false);
    slider.addEventListener('mouseleave', stopDragging, false);
  }, []);

  return (
      <>
        <div className='relatedCarouselTitle'> My Outfit</div>
        <div className="relatedPanel">
          {leftFogOfWar}
          <div className="relatedCarousel" id='my-carousel'>{relatedComponents}</div>
          <div className="relatedFogOfWarR">{rightArrow}</div>
        </div>
    </>
  );
};

export default CarouselYourOutfit;
