import React from 'react';
import BarLoader from 'react-spinners/BarLoader';
import StarRating from '../starRating.jsx';

const EmptyCard = () => {
  const actionText = <div> ⓧ </div>;

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
        <div>☆☆☆☆☆</div>
      </div>
    </div>
  );
};

export default EmptyCard;
