import React from 'react'
import { createRoot } from 'react-dom/client'
import RelatedCarousel from './components/Related/Carousel.jsx';
import Overview from './components/overview/overview.jsx';
import ReviewList from './components/reviews/reviewlist.jsx';

import './assets/styles.css';

const { useState } = React;

const App = () => {
  const [productID, setProductID] = useState('40348');

  return (
    <div>
      <Overview />
      <ReviewList />
      <RelatedCarousel productID={productID} setProductID={setProductID}/>
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
