import React from 'react';

const ReviewTile = ({ review }) => (
  <div>
    <h5>
      {review.rating}
      {review.reviewer_name}
      {review.date}
    </h5>
    <section>
      <p>{review.summary}</p>
      <p>{review.body}</p>
      <p>{review.recommend ? 'I recommend this product' : null}</p>
    </section>
    <footer>
      Helpful? Yes
      {review.helpfulness}
    </footer>
  </div>
);

export default ReviewTile;
