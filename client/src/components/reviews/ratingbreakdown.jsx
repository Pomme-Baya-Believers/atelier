import React from 'react';
import Stars from './reviewStarRating.jsx';

const RatingBreakdown = ({ meta }) => {
  console.log(meta);
  let avgRating;
  let recommended;
  let ratings = [];
  let ratingRatio = [];
  if (meta.ratings) {
    ratings = Object.values(meta.ratings);
    const totalRatings = ratings.reduce((acc, curr) => Number(acc) + Number(curr));
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
      <h6 id='ratingBreakdownHeader'>RATING BREAKDOWN</h6>
      <h1 className='ratingBreakdownAverage'>{avgRating}<Stars averageRating={avgRating}/></h1>
      <span id='ratingRecommend'>{recommended}% of reviews recommend this product</span>
      <div id="ratingBreakdown">
        <div className="rating">
          <span className="ratingLabel">5 Stars</span>
          <div className="ratingBar">
            <div className="ratingBarGreen" style={{ width: `${ratingRatio[4]}%` }}></div>
          </div>
            <div className='ratingCount'>{ratings[4]}</div>
        </div>
        <div className="rating">
          <span className="ratingLabel">4 Stars</span>
          <div className="ratingBar">
            <div className="ratingBarGreen" style={{ width: `${ratingRatio[3]}%` }}></div>
          </div>
          <div className='ratingCount'>{ratings[3]}</div>
        </div>
        <div className="rating">
          <span className="ratingLabel">3 Stars</span>
          <div className="ratingBar">
            <div className="ratingBarGreen" style={{ width: `${ratingRatio[2]}%` }}></div>
          </div>
          <div className='ratingCount'>{ratings[2]}</div>
        </div>
        <div className="rating">
          <span className="ratingLabel">2 Stars</span>
          <div className="ratingBar">
            <div className="ratingBarGreen" style={{ width: `${ratingRatio[1]}%` }}></div>
          </div>
          <div className='ratingCount'>{ratings[1]}</div>
        </div>
        <div className="rating">
          <span className="ratingLabel">1 Stars</span>
          <div className="ratingBar">
            <div className="ratingBarGreen" style={{ width: `${ratingRatio[0]}%` }}></div>
          </div>
          <div className='ratingCount'>{ratings[0]}</div>
        </div>
      </div>
    </div>
  );
};

export default RatingBreakdown;
