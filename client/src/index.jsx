import React from 'react'
import { createRoot } from 'react-dom/client'
import RelatedProductCard from './components/Related/RelatedProductCard.jsx';
import RelatedCarousel from './components/Related/Carousel.jsx'

import "./assets/styles.css";
const {useState} = React;

const App = () => {

  const [productID, setProductID] =  useState('40344')

  return (
    <div>
      <RelatedCarousel  productID={productID} setProductID={setProductID}/>
    </div>
  )
}

const container = document.getElementById('root')
const root = createRoot(container);
root.render(<App />);


