import React, {useContext, useEffect} from 'react';

import RelatedProductCard from './RelatedProductCard.jsx';
import EmptyCard from './EmptyCard.jsx';
import apiHelper from './apihelpers.jsx';

import { ProductContext } from '../../index.jsx';

const { useState } = React;

const RelatedCarousel = ({
  numberOfTiles, relatedList, mainData, styles,
}) => {
  const [productID, setProductID] = useContext(ProductContext);


  if (relatedList) {
    // eslint-disable-next-line no-param-reassign
    relatedList = relatedList.filter((item) => {
      if (item === 40353) { console.log('infinityStone destroyed'); }
      return (item !== 40353 && item !== 40345);
    });
  }

  let uniqueRelated = [];
  let slicedRelated = [];
  let relatedComponents = [];
  const [position, setPosition] = useState(0);
  const clickRightArrow = () => {
    console.log('Right ARROW CLICKED');
    // if (position + 1 < relatedList.length) { setPosition(position + 1); }
  };
  const clickLeftArrow = () => {
    console.log('Left ARROW CLICKED');
    // if (position > 0) { setPosition(position - 1); }
  };
  uniqueRelated = [...new Set(relatedList)];
  slicedRelated = uniqueRelated;
  // slicedRelated = slicedRelated.slice(position, numberOfTiles + position);
  // eslint-disable-next-line arrow-body-style
  relatedComponents = slicedRelated.map((id) => {
    return (
    <RelatedProductCard key={id} thisID={id} styles={styles}
       setPosition={setPosition} mainData={mainData}/>
    );
  });

  if (relatedList === undefined) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < numberOfTiles; i++) {
      relatedComponents.push(<EmptyCard key={i}/>);
    }
  }

  const enterClickRight = (e) => {
    console.log(e.code);
    if (e.code === 'Enter') {
      clickRightArrow();
    }
  };

  const enterClickLeft = (e) => {
    console.log(e.code);
    if (e.code === 'Enter') {
      clickLeftArrow();
    }
  };

  // const leftArrow = position > 0
  //   ? <div className ="relatedArrow" tabIndex='1' onKeyDown={(e)=> enterClickLeft(e)} onClick={clickLeftArrow}> {'<'} </div>
  //   : <div className ="relatedArrowOFF" > {'<'} </div>;

  // const rightArrow = position + numberOfTiles < uniqueRelated.length
  //   ? <div className ="relatedArrow" tabIndex='1' onKeyDown={(e)=> enterClickRight(e)} onClick={clickRightArrow}> {'>'} </div>
  //   : <div className ="relatedArrowOFF"> {'>'} </div>;

  let leftArrow = <div className ="relatedArrowOFF" > {'<'} </div>;
  let rightArrow = <div className ="relatedArrowOFF"> {'>'} </div>;
  let leftFogOfWar = <div className="relatedFogOfWarL">{leftArrow}</div>;
  if (position + numberOfTiles <= uniqueRelated.length - 1) {
    leftArrow = <div className ="relatedArrow" onClick={clickLeftArrow}> {'<'} </div>;
    rightArrow = <div className ="relatedArrow" onClick={clickRightArrow}> {'>'} </div>;
    leftFogOfWar = <div className="relatedFogOfWarLActive">{leftArrow}</div>;
  }

  useEffect(() => {
    const slider = document.getElementById('relatedCarousel');
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
    }, []);

    // Add the event listeners
    slider.addEventListener('mousedown', startDragging, false);
    slider.addEventListener('mouseup', stopDragging, false);
    slider.addEventListener('mouseleave', stopDragging, false);
  }, []);

  return (
    <>
      <div className='relatedCarouselTitle'>Similar Items</div>
      <div className="relatedPanel">
            {leftFogOfWar}
            <div className='relatedCarousel' id='relatedCarousel'>
              {relatedComponents}
            </div>
          <div className="relatedFogOfWarR">{rightArrow}</div>
      </div>
    </>
  );
};

export default RelatedCarousel;
