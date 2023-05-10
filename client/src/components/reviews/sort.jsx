import React from 'react';

const Sort = ({ setSort, reviews }) => (
  <div id='sortComponent'>{reviews.results && reviews.results.length} reviews, sorted by
  <select name='Sort By' id='sortMenu' onChange={(e) => setSort(e.target.value)}>
    <option value='relevant'>relevance</option>
    <option value='newest'>newest</option>
    <option value='helpfulness'>helpfulness</option>
  </select>
  </div>
);

export default Sort;
