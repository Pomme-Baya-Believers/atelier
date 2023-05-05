import React, { useState, useEffect } from 'react';
import ReviewTile from './reviewtile.jsx';
import apiHelper from './apihelpers.jsx';
import Sort from './sort.jsx';

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
      <div id='reviewAllTiles'>
      {reviews.results
      && reviews.results.map((review) => <ReviewTile key={review.review_id} review={review} />)}
      <button className='reviewButton' type="button" onClick={() => { setCount(count + 2); }}>More reviews</button>
      </div>
    </div>
  );
};

export default ReviewList;
