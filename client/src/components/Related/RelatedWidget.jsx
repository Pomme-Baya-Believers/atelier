import React from 'react';
import apiHelper from './apihelpers.jsx';

import Carousel from './Carousel.jsx';

const {useState, useEffect} = React;

const RelatedWidget = ({ productID, setProductID }) => {
  const [position, setPosition] = useState(0);
  const [related, setRelated] = useState([Number(productID)]);
  const [numberOfTiles, setNumberOfTiles] = useState(Math.floor(window.innerWidth / 217) - 1);


  useEffect(() => {
    apiHelper.getRelated(productID)
      .then((res) => {
        setRelated(res.data);
      })
      .catch((err) => console.error(err));
    const handleResize = (numberOfTiles) => {
      console.log('RESIZE', window.innerWidth, window.innerHeight);
      setNumberOfTiles(Math.floor(window.innerWidth / 217) - 1);
    };
    window.addEventListener('resize', handleResize);
  }, [productID, window.innerWidth]);

  console.log(numberOfTiles)

  return (
    <Carousel related={related} numberOfTiles={numberOfTiles}  setRelated={setRelated} productID={productID} setProductID={setProductID} position={position} setPosition={setPosition}/>
  )
}

export default RelatedWidget;