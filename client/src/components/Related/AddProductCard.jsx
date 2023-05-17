import React from 'react';
import BarLoader from 'react-spinners/BarLoader';


const AddProductCard = ({ mainData, setStorage, styles }) => {
  let productImage;
  if (styles) {
    productImage = styles[0].photos[0].thumbnail_url;
    // setProductImage(styles.results[0].photos[0].thumbnail_url);
  }

  let storage;
  function addItem(item) {
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

  let name = ' ';
  let relatedText;
  if (mainData) {
    name = mainData.name;
    relatedText = (
      <div id="relatedAddTextBox">
      <div className="relatedAddText">Add  </div>
      <div className="relatedAddText">{name} </div>
      <div className="relatedAddText">To Your Outfit!!</div>
  </div>
    );
  }

  return (
    <div className="relatedAddCard" onClick={() => addItem(mainData)}>
      <img key='image' src={productImage}/>
      <BarLoader color="#36d7b7"/>
      {relatedText}
    </div>
  );
};

export default AddProductCard;
