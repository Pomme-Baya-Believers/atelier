import React from 'react';
import apiHelper from './apihelpers.jsx';
import CarouselYourOutfit from './CarouselYourOutfit.jsx';

import Carousel from './Carousel.jsx';

const { useState, useEffect } = React;

const RelatedWidget = ({ productID, setProductID }) => {
  const [related, setRelated] = useState([Number(productID)]);
  const [numberOfTiles, setNumberOfTiles] = useState(Math.floor(window.innerWidth / 217) );
  const [mainData, setMainData] = useState();
  // const [position, setPosition] = useState(0);
  console.log("NUMER OF TILES", numberOfTiles)

  useEffect(() => {
    apiHelper.getProduct(productID)
      .then((res) => {
        setMainData(res.data);
      })
      .catch((err) => console.log('ERROR', err));
    apiHelper.getRelated(productID)
      .then((res) => {
        setRelated(res.data);
      })
      .catch((err) => console.error(err));
    const handleResize = () => {
      console.log('RESIZE', window.innerWidth, window.innerHeight);
      setNumberOfTiles(Math.floor(window.innerWidth / 217));
    };

    window.addEventListener('resize', handleResize);
  }, [productID, window.innerWidth]);

  const commonProps = {
    mainData: mainData,
    related: related,
    numberOfTiles: numberOfTiles,
    setRelated: setRelated,
    productID: productID,
    setProductID: setProductID,
    // position: position,
    // setPosition: setPosition
  };

  return (
    <>
    <Carousel {...commonProps} relatedBool={true}/>
    <CarouselYourOutfit {...commonProps} relatedBool={false}/>
    </>
  );
};

export default RelatedWidget;
