import React from 'react';
import apiHelper from './apihelpers.jsx';

const { useState, useEffect } = React;

const AddProductCard = ({ productID, mainData, setStorage }) => {
  const [productImage, setProductImage] = useState('');
  console.log(productID)
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
      localStorage.setItem('MyOutfit', JSON.stringify([]))
    }
    if (!storage) {
      localStorage.setItem('MyOutfit', JSON.stringify(entry));
    } else {
      // eslint-disable-next-line arrow-body-style
      const ids = storage.map((product) => {
        return product.id;
      });
      if (!ids.includes(item.id)) {
        const newEntry = storage;
        newEntry.push(item);
        setStorage(newEntry);
        localStorage.setItem('MyOutfit', JSON.stringify(storage));
      }
    }
  };

let name = 'Item';

  if (mainData) {
    console.log(mainData.name)
    name = mainData.name;
  }

  return (
    <>
    <div className="relatedAddCard" onClick={() => addItem(mainData)}>
            <img key='image' src={productImage}/>
        <div>
            <div className="relatedAddText">Add  </div>
            <strong className="relatedAddText">{name} </strong>
            <div className="relatedAddText">To Your Outfit!!</div>
        </div>
    </div>
    </>

  );
};

export default AddProductCard;
