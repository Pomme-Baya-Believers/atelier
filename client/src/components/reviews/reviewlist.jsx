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
  const [displayedReviews, setDisplayedReviews] = useState([]);
  const [term, setTerm] = useState('');
  const [clicked, setClicked] = useState(false);
  const [scrolledCount, setScrolledCount] = useState(6);

  useEffect(() => apiHelper.getReviews(10000, sort, productID, setReviews), [productID, sort]);
  useEffect(() => apiHelper.getMeta(productID, setMeta), [productID]);

  const reviewWindow = document.getElementById('reviewAllTiles');
  const scrollHandler = () => {
    if (reviewWindow.scrollTop + reviewWindow.offsetHeight + 2 >= reviewWindow.scrollHeight && term === '') {
      setCount(count + 2);
      setScrolledCount(count + 2);
    }
  };

  const moreHandler = () => {
    document.getElementById('showMoreOnce').style.display = 'none';
    setCount(count + 4);
    setClicked(true);
  };

  const searchHandler = (e) => {
    if (e.target.value.length >= 3) {
      setCount(reviews.results.length);
      setTerm(e.target.value.toLowerCase());
      document.getElementById('showMoreOnce').style.display = 'none';
    } else {
      setTerm('');
      if (!clicked) {
        setCount(2);
        document.getElementById('showMoreOnce').style.display = 'inline';
      } else {
        setCount(scrolledCount);
      }
    }
  };

  return (
    <div>
      <div id='reviewComponent'>
        <div id='breakdowns'>
          <RatingBreakdown meta={meta} reviews={reviews}
          setDisplayedReviews={setDisplayedReviews}/>
          <ProductBreakdown meta={meta}/>
        </div>
        <div id='reviewMain'>
          <Sort setSort={setSort} displayedReviews={displayedReviews}/>
          <input type='text' id='searchBar' placeholder='Search...' onChange={(e) => searchHandler(e)}/>
          <NewReview productID={productID} meta={meta}/>
          <div id='reviewAllTiles' onScroll={scrollHandler}>
          {displayedReviews && displayedReviews.slice(0, count).map((review) => <ReviewTile
          key={review.review_id} review={review} term={term}/>)}
          </div>
          <div className='listButtons'>
            <button id='showMoreOnce' className='reviewButton' type="button" onClick={moreHandler}>More reviews</button>
            <button className='newReviewButton' type="button" onClick={() => { document.getElementById('newReview').showModal(); }} >Write a review</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewList;
