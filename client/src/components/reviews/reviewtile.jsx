import React from 'react';
import Stars from './reviewStarRating.jsx';

const ReviewTile = ({ review }) => (
  <div className='reviewTile'>
    <header className='reviewHeader'>
      <div className='reviewTileStars'><Stars averageRating={review.rating}/></div>
      <div>{review.reviewer_name} {review.date}</div>
    </header>
    <section className='reviewContent'>
      <h3 id='reviewSummary'>{review.summary}</h3>
      <p id='reviewBody'>{review.body}</p>
      {review.recommend ? <p>{'I recommend this product'}</p> : null}
    </section>
    {review.response
    && <div className='reviewResponse'>
      <div className='responseHeader'>Response from seller</div>
      <div>{review.response}testestsetasetasasdfasdfdsafasfdsf</div>
    </div>}
    <footer className='reviewFooter'>
      Helpful? Yes {review.helpfulness}
    </footer>
  </div>
);

export default ReviewTile;
