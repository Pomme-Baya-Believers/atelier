import React from 'react';
import BarLoader from 'react-spinners/BarLoader';
import apiHelper from './apihelpers.jsx';
import DetailsModal from './DetailsModal.jsx';
import StarRating from '../starRating.jsx';
import PriceStrike from '../PriceStrike.jsx';

const { useState, useEffect } = React;

const RelatedProductsCard = ({
  thisID, productID, setProductID, setPosition, mainData, styles,
}) => {
  const [data, setData] = useState('');
  const [productImage, setProductImage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [style, setStyle] = useState('');

  useEffect(() => {
    apiHelper.getProduct(thisID)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
    apiHelper.getStyles(thisID)
      .then((res) => {
        setStyle(res);
        setProductImage(res.data.results[0].photos[0].thumbnail_url
          || res.data.results[0].photos[1].thumbnail_url);
      });
  }, []);
  const cardClick = () => {
    setProductID(thisID);
    setPosition(0);
  };

  const actionClick = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const actionText = '☆';

  const enterClick = (e) => {
    if (e.code === 'Enter') {
      cardClick();
    }
  };

  const enterModal = (e) => {
    if (e.code === 'Enter') {
      actionClick();
    }
  };

  return (
    <div className="relatedCard" tabIndex="1" onKeyDown={(e) => enterClick(e)} >
      <DetailsModal productID={productID} mainData={mainData}
  thisID={thisID} showModal={showModal} closeModal={closeModal} data={data}/>
    <div className="relatedProductImage">
      <div className="relatedActionButton" onKeyDown={(e) => enterModal(e)}
        onClick={actionClick} tabIndex="1">
      {actionText} </div>
      <BarLoader color="#36d7b7"/>
      <img onClick={cardClick} src={productImage} />
    </div>
    <div className="relatedBottomTile" onClick={cardClick}>
      <div className="relatedCategory">{data.category}</div>
      <strong className="relatedProductName">{data.name}</strong>
      <PriceStrike styles={style} />
      <StarRating productID={thisID} data={data}/>
    </div>
  </div>
  );
};

export default RelatedProductsCard;
