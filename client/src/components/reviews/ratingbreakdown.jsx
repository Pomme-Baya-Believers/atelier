import React, { useState, useEffect } from 'react';
import Stars from './reviewStarRating.jsx';

const RatingBreakdown = ({ meta, reviews, setDisplayedReviews }) => {
  const [filter, setFilter] = useState([1, 2, 3, 4, 5]);
  const [unfiltered, setUnfiltered] = useState(true);

  useEffect(() => {
    if (reviews.results) {
      const filteredReviews = reviews.results.filter((review) => (
        filter.indexOf(review.rating) !== -1
      ));
      setDisplayedReviews(filteredReviews);
    }
  }, [filter, reviews]);

  const filterHandler = (rating) => {
    if (unfiltered) {
      setFilter([rating]);
      setUnfiltered(false);
    } else if (filter.indexOf(rating) !== -1 && filter.length === 1) {
      setFilter([1, 2, 3, 4, 5]);
      setUnfiltered(true);
    } else if (filter.indexOf(rating) === -1) {
      setFilter([...filter, rating]);
    } else {
      const newFilter = filter.slice();
      newFilter.splice(newFilter.indexOf(rating), 1);
      setFilter(newFilter);
    }
  };

  let avgRating;
  let recommended;
  let totalRatings;
  let ratings = [];
  let ratingRatio = [];
  if (meta.ratings) {
    ratings = Object.values(meta.ratings);
    totalRatings = ratings.reduce((acc, curr) => Number(acc) + Number(curr));
    avgRating = (ratings.reduce(
      (acc, curr, idx) => Number(acc) + (idx + 1) * Number(curr),
    )) / totalRatings;
    avgRating = Math.round(avgRating * 10) / 10;
    recommended = meta.recommended.true / (Number(meta.recommended.true)
      + Number(meta.recommended.false));
    recommended = Math.round(recommended * 100);
    ratingRatio = ratings.map((rating) => Math.round((rating / totalRatings) * 100));
  }

  return (
    <div id='ratingComponent'>
      <h5 id='ratingBreakdownHeader'>RATING BREAKDOWN</h5>
      {!unfiltered
      && <div>
        <h6 id='ratingFilter'>Filtered by {filter.sort().join(', ')} Star Reviews</h6>
        <button id='ratingFilterButton' onClick={() => { setFilter([1, 2, 3, 4, 5]); setUnfiltered(true); }}>
          Remove all filters</button>
      </div>}
      <h1 className='ratingBreakdownAverage'>{avgRating}<Stars averageRating={avgRating}/></h1>
      <span id='ratingRecommend'>{recommended}% of reviews recommend this product</span>
      <div id="ratingBreakdown">
        <div className="rating" onClick={() => filterHandler(5)}>
          <span className="ratingLabel">5 Stars</span>
          <div className="ratingBar">
            <div className="ratingBarGreen" style={{ width: `${ratingRatio[4]}%` }}></div>
          </div>
            <div className='ratingCount'>{ratings[4]}</div>
        </div>
        <div className="rating" onClick={() => filterHandler(4)}>
          <span className="ratingLabel">4 Stars</span>
          <div className="ratingBar">
            <div className="ratingBarGreen" style={{ width: `${ratingRatio[3]}%` }}></div>
          </div>
          <div className='ratingCount'>{ratings[3]}</div>
        </div>
        <div className="rating" onClick={() => filterHandler(3)}>
          <span className="ratingLabel">3 Stars</span>
          <div className="ratingBar">
            <div className="ratingBarGreen" style={{ width: `${ratingRatio[2]}%` }}></div>
          </div>
          <div className='ratingCount'>{ratings[2]}</div>
        </div>
        <div className="rating" onClick={() => filterHandler(2)}>
          <span className="ratingLabel">2 Stars</span>
          <div className="ratingBar">
            <div className="ratingBarGreen" style={{ width: `${ratingRatio[1]}%` }}></div>
          </div>
          <div className='ratingCount'>{ratings[1]}</div>
        </div>
        <div className="rating" onClick={() => filterHandler(1)}>
          <span className="ratingLabel">1 Stars</span>
          <div className="ratingBar">
            <div className="ratingBarGreen" style={{ width: `${ratingRatio[0]}%` }}></div>
          </div>
          <div className='ratingCount'>{ratings[0]}</div>
        </div>
      </div>
      <div id='ratingTotal'>({totalRatings} total ratings)</div>
    </div>
  );
};

export default RatingBreakdown;
