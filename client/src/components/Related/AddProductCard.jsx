import React from 'react';
import apiHelper from './apihelpers.jsx';

const { useState, useEffect } = React;

const AddProductCard = ({ productID, mainData, setStorage }) => {
  const [productImage, setProductImage] = useState('');
  useEffect(() => {
    apiHelper.getStyles(productID)
      .then((res) => {
        setProductImage(res.data.results[0].photos[0].thumbnail_url);
      });
  }, [productID]);

  let storage;
  const addItem = (item) => {
    const entry = [item];
    storage = JSON.parse(localStorage.getItem('MyOutfit'));
    if (storage === null) {
      localStorage.setItem('MyOutfit', JSON.stringify([]));
    }
    if (!storage) {
      localStorage.setItem('MyOutfit', JSON.stringify(entry));
    } else {
      // eslint-disable-next-line arrow-body-style
      const ids = storage.map((product) => {
        return product.id;
      });
      if (!ids.includes(item.id)) {
        storage.push(item);
        setStorage(storage);
        localStorage.setItem('MyOutfit', JSON.stringify(storage));
      }
    }
  };

  let name = 'Item';

  if (mainData) {
    name = mainData.name;
  }

  return (
    <>
    <div className="relatedAddCard" onClick={() => addItem(mainData)}>
        <div>
            <div className="relatedAddText">Add  </div>
            <strong className="relatedAddText">{name} </strong>
            <div className="relatedAddText">To Your Outfit!!</div>
        </div>
            <img key='image' src={productImage}/>
    </div>
    </>

  );
};

export default AddProductCard;
