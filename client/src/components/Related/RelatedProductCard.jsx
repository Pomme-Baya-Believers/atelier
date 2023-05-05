import React from 'react';
import axios from 'axios';
import apiHelper from './apihelpers.jsx';


const { useState, useEffect } = React;

const RelatedProductsCard = ({ productID, setProductID }) => {
  const related = true;
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [id, setID] = useState('');


  useEffect(() => {
    apiHelper.getProduct(productID)
      .then((res) => {
        setName(res.data.name);
        setPrice(res.data.default_price);
        setCategory(res.data.category);
      })
      .catch((err) => console.error(err));
  }, []);




  const cardClick = () => {
    setProductID(productID);
    console.log("NEW ID:", productID)
  };

  const actionClick = (e) => {
    console.log("ACTION CLICKED")
  };

  const actionText = related ? '★' : 'X';

  return (
    <div className="relatedCard" >
      <div className="relatedProductImage">
        <div className="relatedActionButton" onClick={actionClick}> {actionText} </div>
        <img onClick={cardClick} src="https://cdn.shopify.com/s/files/1/0419/1525/products/1024x1024-Men-Captain-Tobacco-043021-2.jpg?v=1620400973">
        </img>
      </div>
      <div className="relatedBottomTile">
        <div className="relatedCategory">{category}</div>
        <strong className="relatedProductName" onClick={cardClick}>{name}</strong>
        <div className="relatedPrice"> {price} </div>
        <div className="relatedStars"> ★★★★★  </div>
      </div>
    </div>
  );
};

export default RelatedProductsCard;

//GET /products/:product_id/related
//returns [40946,40831,41246] array of numbers to utilize for related list
