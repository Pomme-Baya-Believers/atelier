import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import "../assets/styles.css";
import axios from 'axios';

const Star = ({ productID }) => {
  const [averageRating, setAverageRating] = useState(0);
  // console.log('This is the star productID', productID);

  useEffect(() => {
    axios.get('/matthew/meta', { params: { endpoint: `?product_id=${productID}` } })
      .then((response) => {
        const { ratings } = response.data;
        let totalScore = 0;
        let totalRatings = 0;
        for (const [key,value] of Object.entries(ratings)) {
          totalScore += (key * value);
          totalRatings += Number(value)
          // console.log('This is the average rating', totalScore / totalRatings)
          setAverageRating(totalScore / totalRatings)
        }
      });
  }, []);

  const style = { '--rating': averageRating };
  return (
    <div className="Stars" style={style} aria-label={`Rating of this product is ${averageRating} out of 5.`}></div>);
};

export default Star;
