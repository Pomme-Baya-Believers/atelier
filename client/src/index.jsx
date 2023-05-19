import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Overview from './components/overview/overview.jsx';
import ReviewList from './components/reviews/reviewlist.jsx';
import RelatedWidget from './components/Related/RelatedWidget.jsx';
import apiHelpers from './components/Related/apihelpers.jsx';

import './assets/styles.css';

const ProductContext = React.createContext({}, () => {});

const App = () => {
  const [mainData, setMainData] = useState();
  const [productID, setProductID] = useState(40348);
  const [styles, setStyles] = useState('');
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('DarkMode')));



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

  if (!theme) {
    localStorage.setItem('DarkMode', JSON.stringify(false));
  }

  useEffect(() => {
    localStorage.setItem('DarkMode', JSON.stringify(theme))
    if (theme) {
      document.getElementById('root').style = `
        font-family: sans-serif;
        --highlight: #ff9900;
        --lowlight: #146eb4;
        --accent: rgb(83, 83, 83);
        --main: #000000;
        --background: rgb(27, 27, 27);
        --tile: rgb(38,38,38);
        --text2: rgb(196, 196, 196);
        --action-color:  rgb(55,55,55);
        --component: rgb(50, 50, 50);
        background-color: var(--background);
        color:rgb(196, 196, 196);`;
    } else {
      document.getElementById('root').style = `
        font-family: sans-serif;
          --highlight: #ff9900;
          --lowlight: #146eb4;
          --accent: #232f3e;
          --main: #000000;
          --background: #f2f2f2;
          --action-color: white;
          --component: white;
          background-color: var(--background);`;
    }
  }, [theme]);

  return (
    <ProductContext.Provider value={[productID, setProductID]}>
      <div id='appHeaderMargin'>
        <header id='appHeader'>Atelier
          <a className='membersTop' href='https://www.linkedin.com/in/matthew-baseman/'>Matthew Baseman</a>
          <a className='membersTop' href='https://www.linkedin.com/in/sean-winnik-9644aa47/'>Sean Winnik</a>
          <a className='membersTop' href='https://www.linkedin.com/in/naru-sadakuni-0a402310a/'>Naru Sadakuni</a>
          <button id="darkButton" onClick={() => setTheme(!theme)}>{theme ? 'Light mode' : 'Dark mode'}</button>
        </header>
      </div>
      <div id='appHeaderFiller'></div>
      <div id='backdrop'></div>
      <Overview productID={productID} />
      <RelatedWidget styles={styles} mainData={mainData}/>
      <ReviewList productID={productID} mainData={mainData}/>
      <div id='appFooterMargin'>Back to top</div>
      <footer id='appFooter'>
        <a className='members' href='https://www.linkedin.com/in/matthew-baseman/'>Matthew Baseman</a>
        <a className='members' href='https://www.linkedin.com/in/sean-winnik-9644aa47/'>Sean Winnik</a>
        <a className='members' href='https://www.linkedin.com/in/naru-sadakuni-0a402310a/'>Naru Sadakuni</a>
        <div id='internalUse'>FOR INTERNAL USE ONLY</div>
      </footer>
    </ProductContext.Provider>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

export { ProductContext }