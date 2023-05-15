import React from 'react';
import apiHelper from './apihelpers.jsx';
import CarouselYourOutfit from './CarouselYourOutfit.jsx';

import Carousel from './Carousel.jsx';

const { useState, useEffect } = React;

const RelatedWidget = ({ productID, setProductID }) => {
  const [related, setRelated] = useState();
  const [numberOfTiles, setNumberOfTiles] = useState(Math.floor(window.innerWidth / 217));
  const [mainData, setMainData] = useState();
  const [storage, setStorage] = useState(JSON.parse(localStorage.getItem('MyOutfit')));

  if (storage === null) {
    setStorage([]);
    localStorage.setItem('MyOutfit', JSON.stringify([]));
  } useEffect(() => {
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
    mainData,
    related,
    numberOfTiles,
    setRelated,
    productID,
    setProductID,
  };

  return (
    <>
    <Carousel {...commonProps} relatedBool={true}/>
    <CarouselYourOutfit {...commonProps} relatedBool={false}
      storage={storage} setStorage={setStorage}/>
    </>
  );
};

export default RelatedWidget;
