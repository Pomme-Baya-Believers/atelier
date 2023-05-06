import React from 'react';

const Sort = ({ setSort }) => (
  <select name='Sort By' onChange={(e) => setSort(e.target.value)}>
    <option value='relevant'>Relevant</option>
    <option value='newest'>Newest</option>
    <option value='helpfulness'>Helpfulness</option>
  </select>
);

export default Sort;
