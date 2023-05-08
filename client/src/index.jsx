import React from 'react'
import { createRoot } from 'react-dom/client'
import RelatedCarousel from './components/Related/Carousel.jsx';
import Overview from './components/overview/overview.jsx';
import ReviewList from './components/reviews/reviewlist.jsx';
import RelatedWidget from './components/Related/RelatedWidget.jsx'

import './assets/styles.css';

const { useState } = React;

const App = () => {
  const [productID, setProductID] = useState('40349');
  return (
    <div>
      {/* <Overview /> */}
      {/* <ReviewList /> */}
      <RelatedWidget productID={productID} setProductID={setProductID}/>
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
