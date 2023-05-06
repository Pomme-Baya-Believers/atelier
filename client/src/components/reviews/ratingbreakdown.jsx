import React from 'react';

const RatingBreakdown = ({ meta }) => {
  console.log(meta);
  let avgRating;
  let recommended;
  if (meta.ratings) {
    const ratings = Object.values(meta.ratings);
    const totalRatings = ratings.reduce((acc, curr) => Number(acc) + Number(curr));
    avgRating = (ratings.reduce(
      (acc, curr, idx) => Number(acc) + (idx + 1) * Number(curr),
    )) / totalRatings;
    avgRating = Math.round(avgRating * 10) / 10;

    recommended = meta.recommended.true / (Number(meta.recommended.true)
    + Number(meta.recommended.false));
    recommended = Math.round(recommended * 100);
  }

  return (
    <div>
        <h1>{avgRating}</h1>
        <span>{recommended}% of reviews recommend this product</span>
    </div>

  );
};

export default RatingBreakdown;
