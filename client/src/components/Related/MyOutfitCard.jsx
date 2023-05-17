import React from 'react';
import BarLoader from 'react-spinners/BarLoader';
import apiHelper from './apihelpers.jsx';
import StarRating from '../starRating.jsx';
import PriceStrike from '../PriceStrike.jsx';

const { useState, useEffect } = React;

const MyOutfitCard = ({
  thisID, setProductID, setPosition, data, setStorage,
}) => {
  const [productStyle, setProductStyle] = useState('');
  const [productImage, setProductImage] = useState('');

  const { category } = data;
  const { name } = data;
  useEffect(() => {
    apiHelper.getStyles(thisID)
      .then((res) => {
        setProductStyle(res.data.results[0]);
        setProductImage(res.data.results[0].photos[0].thumbnail_url);
      });
  }, []);

  const cardClick = () => {
    setProductID(thisID);
    setPosition(0);
  };

  const removeProduct = () => {
    let storage = JSON.parse(localStorage.getItem('MyOutfit'));
    // eslint-disable-next-line arrow-body-style
    storage = storage.filter((product) => {
      return product.id !== thisID;
    });
    localStorage.setItem('MyOutfit', JSON.stringify(storage));
    setStorage(storage);
  };

  const actionText = <div onClick={removeProduct}> ⓧ </div>;

  return (
    <div className="relatedCard" >
            <div className="relatedProductImage">
        <div className="MyOutfitActionButton" >
        {actionText} </div>
        <img onClick={cardClick} src={productImage} />
        <BarLoader color="#36d7b7"/>
      </div>
      <div className="relatedBottomTile" onClick={cardClick}>
        <div className="relatedCategory">{category}</div>
        <strong className="relatedProductName">{name}</strong>
        <PriceStrike selectedStyle={productStyle} />
      <StarRating productID={thisID}/>
      </div>
    </div>
  );
};

export default MyOutfitCard;
