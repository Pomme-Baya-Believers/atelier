import React from 'react';
import apiHelper from './apihelpers.jsx';
import DetailsModal from './DetailsModal.jsx'
import BarLoader from 'react-spinners/BarLoader'
import StarRating from '../starRating.jsx'

const { useState, useEffect } = React;

const EmptyCard = ({}) => {

  const actionText = <div> 	ⓧ </div>;

  return (
    <div className="relatedCard" >
            <div className="relatedProductImage">
        <div className="MyOutfitActionButton" >{actionText} </div>
        <BarLoader color="#36d7b7"/>
      </div>
      <div className="relatedBottomTile" >
        <div className="relatedCategory"></div>
        <strong className="relatedProductName"></strong>
        <div className="relatedPrice"> </div>
      <StarRating/>
      </div>
    </div>
  );
};
{/* <button className='newReviewButton' type="button" onClick={() => { document.getElementById('newReview').showModal(); }} >Write a review</button> */}

export default EmptyCard;

//GET /products/:product_id/related
//returns [40946,40831,41246] array of numbers to utilize for related list
{/* "https://cdn.shopify.com/s/files/1/0419/1525/products/1024x1024-Men-Captain-Tobacco-043021-2.jpg?v=1620400973" */}
