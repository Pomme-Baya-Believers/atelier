import React, { useState, useEffect } from 'react';
import ReviewTile from './reviewtile.jsx';
import apiHelper from './apihelpers.jsx';
import Sort from './sort.jsx';
import RatingBreakdown from './ratingbreakdown.jsx';

const ReviewList = ({ productID }) => {
  const [reviews, setReviews] = useState({});
  const [count, setCount] = useState(2);
  const [sort, setSort] = useState('relevant');
  const [meta, setMeta] = useState([]);

  useEffect(() => apiHelper.getReviews(count, sort, productID, setReviews), []);
  useEffect(() => apiHelper.getReviews(count, sort, productID, setReviews), [count, sort]);
  useEffect(() => apiHelper.getMeta(productID, setMeta), [reviews]);

  return (
    <div id='reviewComponent'>
      <RatingBreakdown meta={meta}/>
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
