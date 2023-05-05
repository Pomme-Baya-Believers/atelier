import React, { useState, useEffect } from 'react';
import ReviewTile from './reviewtile.jsx';
import apiHelper from './apihelpers.jsx';

function ReviewList() {
  const [reviews, setReviews] = useState({});
  const [count, setCount] = useState(2);

  useEffect(() => apiHelper.getReviews(count, 'relevant', 40344, setReviews), []);

  return (
    <div>
      {reviews.results
      && reviews.results.map((review) => <ReviewTile key={review.review_id} review={review} />)}
    </div>
  );
}

export default ReviewList;
