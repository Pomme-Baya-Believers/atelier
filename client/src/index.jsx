import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Overview from './components/overview/overview.jsx';
import ReviewList from './components/reviews/reviewlist.jsx';
import RelatedWidget from './components/Related/RelatedWidget.jsx';
import apiHelpers from './components/Related/apihelpers.jsx';

import './assets/styles.css';

const App = () => {
  const [mainData, setMainData] = useState();
  const [productID, setProductID] = useState(40348);
  const [styles, setStyles] = useState('');

  useEffect(() => {
    apiHelpers.getProduct(productID)
      .then((res) => {
        setMainData(res.data);
      })
      .catch((err) => console.log('ERROR', err));
    apiHelpers.getStyles(productID)
      .then((res) => {
        setStyles(res.data);
      });
  }, [productID]);

  return (
    <div>
      {/* <Overview productID={productID} /> */}
      <RelatedWidget productID={productID} styles={styles}
        setProductID={setProductID} mainData={mainData}/>
      <ReviewList productID={productID} mainData={mainData}/>
      <footer id='appFooter'>
        <a className='members' href='https://www.linkedin.com/in/matthew-baseman/'>Matthew Baseman</a>
        <a className='members' href='https://www.linkedin.com/in/sean-winnik-9644aa47/'>Sean Winnik</a>
        <a className='members' href='https://www.linkedin.com/in/naru-sadakuni-0a402310a/'>Naru Sadakuni</a>
        <div id='internalUse'>FOR INTERNAL USE ONLY</div>
      </footer>
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
