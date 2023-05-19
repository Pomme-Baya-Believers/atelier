import React, { useState, useEffect } from 'react';
import BasicProductInfo from './basicProductInfo.jsx';
import StyleSelector from './styleSelector.jsx';
import ProductDescription from './productDescription.jsx';
import AddToCart from './addToCart.jsx';
import ImageGallery from './imageGallery.jsx';
import apiHelper from './apihelpers.jsx';

function Overview({ productID }) {
  const [product, setProduct] = useState([]);
  const [styles, setStyles] = useState([]);
  const [style, setStyle] = useState(0);
  const [view, setView] = useState('default');

  useEffect(() => {
    apiHelper.getProduct(productID, setProduct);
    apiHelper.getStyles(productID, setStyles);
    setStyle(0);
  }, [productID]);

  const handleStyleClick = (target) => {
    console.log(target);
    setStyle(target);
  };

  const handleMainPicClick = (target) => {
    console.log(target);
    if (view === 'default') {
      setView('expanded');
    } else {
      setView('default');
    }
  };

  return (
    <div className ={`mainOverview ${view}`}>
      {styles.length > 0 && <ImageGallery view={view}
      styles={styles} style={style} productID={productID} handleMainPicClick={handleMainPicClick}/>}
      {view === 'default' && <BasicProductInfo style={styles[style]} product={product} productID={productID}/>}
      {view === 'default' && <StyleSelector product={product} styles={styles}
      style={style} handleStyleClick={handleStyleClick}/>}
      {view === 'default' && product && styles && <AddToCart product={product} options={styles[style]}/>}
      <ProductDescription product={product}/>
    </div>
  );
}

export default Overview;
