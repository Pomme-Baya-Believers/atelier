import React, { useState, useEffect } from 'react';
import ReviewTile from './reviewtile.jsx';
import apiHelper from './apihelpers.jsx';

const ReviewList = ({ productID }) => {
  const [reviews, setReviews] = useState({});
  const [count, setCount] = useState(2);

  useEffect(() => apiHelper.getReviews(count, 'newest', productID, setReviews), []);
  useEffect(() => apiHelper.getReviews(count, 'newest', productID, setReviews), [count]);

  return (
    <div>
      {reviews.results
      && reviews.results.map((review) => <ReviewTile key={review.review_id} review={review} />)}
      <button type="button" onClick={() => { setCount(count + 2); }}>More reviews</button>
    </div>
  );
};

export default ReviewList;
