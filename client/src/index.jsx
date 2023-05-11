import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import RelatedCarousel from './components/Related/Carousel.jsx';
import Overview from './components/overview/overview.jsx';
import ReviewList from './components/reviews/reviewlist.jsx';
import Star from './components/starRating.jsx';
import RelatedWidget from './components/Related/RelatedWidget.jsx';
import "./assets/styles.css";

const App = () => {
  const [productID, setProductID] = useState(40348);

  return (
    <div>
      {/* <Overview productID={productID} /> */}
      <RelatedWidget productID={productID} setProductID={setProductID}/>
      {/* <ReviewList productID={productID}/> */}
      {/* <Star productID={productID}/> */}
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
