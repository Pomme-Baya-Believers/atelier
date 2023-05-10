import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import RelatedCarousel from './components/Related/Carousel.jsx';
import Overview from './components/overview/overview.jsx';
import ReviewList from './components/reviews/reviewlist.jsx';
import Star from './components/starRating.jsx';
import RelatedWidget from './components/Related/RelatedWidget.jsx';
import "./assets/styles.css";

const App = () => {
  const [productID, setProductID] = useState('40355');
  return (
    <div>
      <RelatedWidget productID={productID} setProductID={setProductID}/>
      {/* <Overview productID={productID} /> */}
      {/* <RelatedCarousel  productID={productID} setProductID={setProductID}/>
      test */}
      <ReviewList productID={productID}/>
      {/* <Star productID={productID}/> */}
      {/* <Overview /> */}
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
