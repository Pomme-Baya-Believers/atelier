import React from 'react';
import apiHelper from './apihelpers.jsx';
import DetailsModal from './DetailsModal.jsx'
import axios from 'axios';

const { useState, useEffect } = React;

const RelatedProductsCard = ({
  thisID, productID, setProductID, setPosition }) => {
  const related = true;
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [data, setData] = useState('')
  const [productImage, setProductImage] = useState('https://cdn.shopify.com/s/files/1/0419/1525/products/1024x1024-Men-Captain-Tobacco-043021-2.jpg?v=1620400973')
  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
    apiHelper.getProduct(thisID)
      .then((res) => {
        setName(res.data.name);
        setPrice(res.data.default_price);
        setCategory(res.data.category);
        setData(res.data);
      })
      .catch((err) => console.error(err));
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
    setShowModal(true)
  };

  const closeModal = () => {
    setShowModal(false)
  };

  //set ShowModal(false), onClick aciton button showModal(true)
  //pass showModal === true / false into detailsModal
  // inside detailsModal component,

  // console.log("AT CARD", thisID, productID)

  const actionText = related ? '★' : 'X';

  return (
    <div className="relatedCard" >
         {/* div wrapping DetailsModal, which recieves props
            outerDiv conditional */}
        <DetailsModal productID={productID}
  thisID={thisID} showModal={showModal} closeModal={closeModal}/>
            <div className="relatedProductImage">
        <div className="relatedActionButton" onClick={actionClick}>
        {actionText} </div>
        <img onClick={cardClick} src={productImage}>
        </img>
      </div>
      <div className="relatedBottomTile" onClick={cardClick}>
        <div className="relatedCategory">{category}</div>
        <strong className="relatedProductName">{name}</strong>
        <div className="relatedPrice"> ${price} </div>
        <div className="relatedStars"> ★★★★★ </div>
      </div>
    </div>
  );
};
{/* <button className='newReviewButton' type="button" onClick={() => { document.getElementById('newReview').showModal(); }} >Write a review</button> */}

export default RelatedProductsCard;

//GET /products/:product_id/related
//returns [40946,40831,41246] array of numbers to utilize for related list
{/* "https://cdn.shopify.com/s/files/1/0419/1525/products/1024x1024-Men-Captain-Tobacco-043021-2.jpg?v=1620400973" */}
