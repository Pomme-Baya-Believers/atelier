import React from 'react';
import axios from 'axios';

const RelatedProductsCard = ({productID}) => {

const related = true ;

const cardClick = (e) => {
  console.log('CARD CLICKED')
  axios.get('/sean/products')
  .then((data) => console.log(data))
}

const actionClick = (e) =>{
  console.log("ACTION CLICKED")
}

const expandedText = "Expanded Product Name "
const price = "$DDD.cc"
const actionText = related ? '★' : 'X'


  return (
    <div className="relatedCard" >
      <div className="relatedProductImage">
        <div  className="relatedActionButton" onClick={actionClick}> {actionText} </div>
        <img onClick={cardClick} src="https://cdn.shopify.com/s/files/1/0419/1525/products/1024x1024-Men-Captain-Tobacco-043021-2.jpg?v=1620400973">
        </img>
      </div>
      <div className="relatedBottomTile">
        <div className="relatedCategory">product category</div>
        <strong className="relatedProductName" onClick={cardClick}>{expandedText}</strong>
        <div className="relatedPrice"> {price} </div>
        <div className="relatedStars"> ★★★★★  </div>
      </div>
    </div>
  )
}

export default RelatedProductsCard;

//GET /products/:product_id/related
//returns [40946,40831,41246] array of numbers to utilize for related list
