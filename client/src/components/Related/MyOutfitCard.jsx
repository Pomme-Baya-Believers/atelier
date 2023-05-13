import React from 'react';
import BarLoader from 'react-spinners/BarLoader';
import apiHelper from './apihelpers.jsx';
import StarRating from '../starRating.jsx';

const { useState, useEffect } = React;

const MyOutfitCard = ({
  thisID, setProductID, setPosition, data, setStorage,
}) => {
  const [productImage, setProductImage] = useState('');
  const { category } = data;
  const price = `$ ${data.default_price}`;
  const { name } = data;

  useEffect(() => {
    apiHelper.getStyles(thisID)
      .then((res) => {
        setProductImage(res.data.results[0].photos[0].thumbnail_url);
      });
  }, []);

  const cardClick = () => {
    setProductID(thisID);
    setPosition(0);
  };

  const actionClick = () => {
    console.log(thisID);
    let storage = JSON.parse(localStorage.getItem('MyOutfit'));
    // eslint-disable-next-line arrow-body-style
    storage = storage.filter((product) => {
      return product.id !== thisID;
    });
    localStorage.setItem('MyOutfit', JSON.stringify(storage));
    console.log('FILTERED', storage);
    setStorage(storage);
  };

  const actionText = <div onClick={actionClick}> ⓧ </div>;

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
        <div className="relatedPrice"> {price} </div>
      <StarRating productID={thisID}/>
      </div>
    </div>
  );
};

export default MyOutfitCard;
