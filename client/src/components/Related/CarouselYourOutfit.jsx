import React, {useContext} from 'react';
import AddProductCard from './AddProductCard.jsx';
import MyOutfitCard from './MyOutfitCard.jsx';
import { ProductContext } from '../../index.jsx';

const { useState } = React;

let slicedRelated = [];
let relatedComponents = [];

const CarouselYourOutfit = ({
  numberOfTiles, relatedList,
  mainData, storage, setStorage, styles, //productID, setProductID,
}) => {
  const [position, setPosition] = useState(0);
  const [productID, setProductID] = useContext(ProductContext);

  let included;
  let relatedProducts = JSON.parse(localStorage.getItem('MyOutfit'));
  relatedProducts = relatedProducts.map((item) => {
    return item.id
  })
  if (relatedProducts.includes(productID)) {
    included = true;
    numberOfTiles ++;
  }

  const clickRightArrow = () => {
    console.log('Right ARROW CLICKED');
    if (position + 2 < relatedList.length) { setPosition(position + 1); }
  };
  const clickLeftArrow = () => {
    console.log('Left ARROW CLICKED');
    if (position > 0) { setPosition(position - 1); }
  };
  slicedRelated = storage.slice(position, numberOfTiles - 1 + position);
  relatedComponents = slicedRelated.map((product) => (
      <MyOutfitCard key={product.id}
        data={product} thisID={product.id} productID={productID}
      setProductID={setProductID} setPosition={setPosition}
        setStorage={setStorage} mainData={mainData}/>
  ));

  const leftArrow = position > 0
    ? <div className ="relatedArrow" onClick={clickLeftArrow}> {'<'} </div>
    : <div className ="relatedArrowOFF" > {'<'} </div>;

  const rightArrow = position + numberOfTiles <= storage.length
    ? <div className ="relatedArrow" onClick={clickRightArrow}> {'>'} </div>
    : <div className ="relatedArrowOFF"> {'>'} </div>;

  if (relatedComponents.length < 1) {
    relatedComponents[0] = <AddProductCard key='1' mainData={mainData}
      styles={styles.results} setStorage={setStorage}/>;
  } else {
    relatedComponents.unshift(
      <AddProductCard key='1' mainData={mainData} styles={styles.results} setStorage={setStorage}/>,
    );
  }

  return (
      <>
        <div className='relatedCarouselTitle'> My Outfit</div>
        <div className="relatedPanel">
          <div className="relatedFogOfWarL">{leftArrow}</div>
          <div className="relatedCarousel">{relatedComponents}</div>
          <div className="relatedFogOfWarR">{rightArrow}</div>
        </div>
    </>
  );
};

export default CarouselYourOutfit;
