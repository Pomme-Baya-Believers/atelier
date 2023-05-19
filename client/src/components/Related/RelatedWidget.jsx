import React from 'react';
import apiHelper from './apihelpers.jsx';
import CarouselYourOutfit from './CarouselYourOutfit.jsx';
import { ProductContext } from '../../index.jsx';

import Carousel from './Carousel.jsx';

const { useState, useEffect, useContext } = React;

const RelatedWidget = ({
  mainData, styles, // productID, setProductID,
}) => {
  const [relatedList, setRelated] = useState();
  const [numberOfTiles, setNumberOfTiles] = useState(Math.floor(window.innerWidth / 217));
  const [storage, setStorage] = useState(JSON.parse(localStorage.getItem('MyOutfit')));

  const [productID, setProductID] = useContext(ProductContext);

  if (storage === null) {
    setStorage([]);
    localStorage.setItem('MyOutfit', JSON.stringify([]));
  } useEffect(() => {
    apiHelper.getRelated(productID)
      .then((res) => {
        setRelated(res.data);
      })
      .catch((err) => console.error(err));
    const handleResize = () => {
      setNumberOfTiles(Math.floor(window.innerWidth / 217));
    };
    window.addEventListener('resize', handleResize);
  }, [productID, window.innerWidth]);

  const commonProps = {
    mainData,
    relatedList,
    numberOfTiles,
    setRelated,
    styles,
  };

  return (
    <>
      <Carousel {...commonProps}/>
      <CarouselYourOutfit {...commonProps}
        storage={storage} setStorage={setStorage}/>
    </>
  );
};

export default RelatedWidget;
