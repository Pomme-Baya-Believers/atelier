import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import RelatedCarousel from './components/Related/Carousel.jsx';
import Overview from './components/overview/overview.jsx';
import ReviewList from './components/reviews/reviewlist.jsx';
import Star from './components/starRating.jsx';
import RelatedWidget from './components/Related/RelatedWidget.jsx';
import apiHelper from './components/Related/apihelpers.jsx';

const App = () => {
  const [mainData, setMainData] = useState();
  const [productID, setProductID] = useState(40348);

  useEffect(() => {
    apiHelper.getProduct(productID)
      .then((res) => { setMainData(res.data); })
      .catch((err) => console.log('ERROR', err));
  }, []);

  return (
    <div>
      <Overview productID={productID} />
      <RelatedWidget productID={productID} setProductID={setProductID} mainData={mainData}/>
      <ReviewList productID={productID}/>
      <Star productID={productID}/>
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
