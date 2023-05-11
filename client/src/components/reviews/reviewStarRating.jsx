import React from 'react';

const Star = ({ averageRating }) => {
  const style = { '--rating': averageRating };
  return (
    <div className="reviewStars" style={style} aria-label={`Rating of this product is ${averageRating} out of 5.`}></div>);
};

export default Star;
