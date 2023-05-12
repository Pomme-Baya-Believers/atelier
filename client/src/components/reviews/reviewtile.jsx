import React, { useState } from 'react';
import Stars from './reviewStarRating.jsx';

const ReviewTile = ({ review }) => {
  const [bodyDisplay, setBodyDisplay] = useState(review.body.slice(0, 250));
  const readableDate = new Date(review.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return (
  <div className='reviewTile'>
    <header className='reviewHeader'>
      <div className='reviewTileStars'><Stars averageRating={review.rating}/></div>
      <div>{review.reviewer_name} {readableDate}</div>
    </header>
    <section className='reviewContent'>
      <h3 id='reviewSummary'>{review.summary}</h3>
      <div id='reviewBody'>
        <div>{bodyDisplay}</div>
        {review.body.length > 251 && bodyDisplay === review.body.slice(0, 250)
        && <button className='reviewShowMore' onClick={() => setBodyDisplay(review.body)}>Show more</button>}
      </div>
      {review.recommend ? <p>&#x2714;{'I recommend this product'}</p> : null}
    </section>
    {review.response
    && <div className='reviewResponse'>
      <div className='responseHeader'>Response from seller</div>
      <div>{review.response}</div>
    </div>}
    <footer className='reviewFooter'>
      Helpful? Yes {review.helpfulness}
    </footer>
  </div>
  );
};

export default ReviewTile;
