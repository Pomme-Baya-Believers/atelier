import React, { useState, useEffect } from 'react';
import apiHelper from './overview/apihelpers.jsx';

const Star = ({ productID }) => {
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    apiHelper.starRating(productID, setAverageRating);
  }, []);

  const style = { '--rating': averageRating };
  return (
    <div className="Stars" style={style} aria-label={`Rating of this product is ${averageRating} out of 5.`}></div>);
};

export default Star;
