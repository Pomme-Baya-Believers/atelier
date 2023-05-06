import React, { useState, useEffect } from 'react';
import ReviewTile from './reviewtile.jsx';
import apiHelper from './apihelpers.jsx';
import Sort from './sort.jsx';
import NewReview from './newreview.jsx';

const ReviewList = ({ productID }) => {
  const [reviews, setReviews] = useState({});
  const [count, setCount] = useState(2);
  const [sort, setSort] = useState('relevant');

  useEffect(() => apiHelper.getReviews(count, sort, productID, setReviews), []);
  useEffect(() => apiHelper.getReviews(count, sort, productID, setReviews), [count]);
  useEffect(() => apiHelper.getReviews(count, sort, productID, setReviews), [sort]);

  return (
    <div>
      <Sort setSort={setSort}/>
      <NewReview productID={productID}/>
      <div id='reviewAllTiles'>
      {reviews.results
      && reviews.results.map((review) => <ReviewTile key={review.review_id} review={review} />)}
        <div className='buttons'>
          <button className='reviewButton' type="button" onClick={() => { setCount(count + 2); }}>More reviews</button>
          <button className='newReviewButton' type="button" onClick={() => { document.getElementById('newReview').showModal(); }} >Write a review</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewList;
