import React from 'react'
import { createRoot } from 'react-dom/client'
import RelatedCarousel from './components/Related/Carousel.jsx'
import Overview from './components/overview/overview.jsx'
import ReviewList from './components/reviews/reviewlist.jsx'
import Star from './components/starRating.jsx'
import RelatedWidget from './components/Related/RelatedWidget.jsx'
import "./assets/styles.css";

const {useState} = React;


const App = () => {
  const [productID, setProductID] = useState(40348);
  return (
    <div>

      <RelatedWidget productID={productID} setProductID={setProductID}/>
      {/* <Overview productID={productID} /> */}
      {/* <ReviewList productID={productID}/> */}
      {/* <Star productID={productID}/> */}
      {/* <Overview /> */}
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
