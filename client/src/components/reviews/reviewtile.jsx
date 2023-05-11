import React from 'react';
import Stars from './reviewStarRating.jsx';

const ReviewTile = ({ review }) => {
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
      <p id='reviewBody'>{review.body}</p>
      {review.recommend ? <p>&#x2714;{'I recommend this product'}</p> : null}
    </section>
    <footer className='reviewFooter'>
      Helpful? Yes {review.helpfulness}
    </footer>
  </div>
  )
};

export default ReviewTile;
