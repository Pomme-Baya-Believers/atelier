import React from 'react';

const ReviewTile = ({ review }) => (
  <div className='reviewTile'>
    <header className='reviewHeader'>
      <h5>{review.rating}</h5>
      <h5>{review.reviewer_name} {review.date}</h5>
    </header>
    <section className='reviewContent'>
      <h3 id='reviewSummary'>{review.summary}</h3>
      <p id='reviewBody'>{review.body}</p>
      {review.recommend ? <p>{'I recommend this product'}</p> : null}
    </section>
    <footer className='reviewFooter'>
      Helpful? Yes
      {review.helpfulness}
    </footer>
  </div>
);

export default ReviewTile;
