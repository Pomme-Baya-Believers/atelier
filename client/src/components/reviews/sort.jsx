import React from 'react';

const Sort = ({ sort, setSort, displayedReviews }) => (
  <div id='sortComponent'>{displayedReviews && displayedReviews.length} reviews, sorted by&nbsp;
  <select name='Sort By' id='sortMenu' value={sort} onChange={(e) => setSort(e.target.value)}>
    <option value='relevant'>relevance</option>
    <option value='newest'>newest</option>
    <option value='helpfulness'>helpfulness</option>
  </select>
  </div>
);

export default Sort;
