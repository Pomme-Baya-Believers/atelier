import React, { useState, useEffect } from 'react';
import ReviewTile from './reviewtile.jsx';
import apiHelper from './apihelpers.jsx';
import Sort from './sort.jsx';
import NewReview from './newreview.jsx';
import RatingBreakdown from './ratingbreakdown.jsx';
import ProductBreakdown from './productBreakdown.jsx';

const ReviewList = ({ productID }) => {
  const [reviews, setReviews] = useState({});
  const [count, setCount] = useState(2);
  const [sort, setSort] = useState('relevant');
  const [meta, setMeta] = useState([]);

  useEffect(() => apiHelper.getReviews(10000, sort, productID, setReviews), []);
  useEffect(() => apiHelper.getReviews(10000, sort, productID, setReviews), [sort]);
  useEffect(() => apiHelper.getMeta(productID, setMeta), [reviews]);

  return (
    <div>
      <div id='reviewComponent'>
        <div id='breakdowns'>
          <RatingBreakdown meta={meta} productID={productID}/>
          <ProductBreakdown meta={meta}/>
        </div>
        <div id='reviewAllTiles'>
        <Sort setSort={setSort} reviews={reviews}/>
        <NewReview productID={productID} meta={meta}/>
        {reviews.results && reviews.results.slice(0, count).map((review) => <ReviewTile
        key={review.review_id} review={review} />)}
          <div className='buttons'>
            {reviews.results && count <= reviews.results.length && <button className='reviewButton' type="button" onClick={() => { setCount(count + 2); }}>More reviews</button>}
            <button className='newReviewButton' type="button" onClick={() => { document.getElementById('newReview').showModal(); }} >Write a review</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewList;
