import React, { useContext } from 'react';
import { ProductContext } from '../../index.jsx';


const AddProductCard = ({ mainData, setStorage, styles }) => {
  let productImage;
  let included;

  const [productID, setProductID] = useContext(ProductContext);
  let relatedProducts = JSON.parse(localStorage.getItem('MyOutfit'));
  relatedProducts = relatedProducts.map((item) => {
    return item.id
  })
  if (relatedProducts.includes(productID)) {
    included = true;
  }

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
        storage.unshift(item);
        setStorage(storage);
        localStorage.setItem('MyOutfit', JSON.stringify(storage));
      }
    }
  }

  let name = 'Item';

  if (mainData) {
    name = mainData.name;
  }

  const enterClick = (e) => {
    if (e.code === 'Enter') {
      addItem(mainData);
    }
  };

  if (included) {
    return <></>;
  }

  return (
    <div className="relatedAddCard" tabIndex="1" onKeyDown={(e) => enterClick(e)}
      onClick={() => addItem(mainData)}>
          <img key='image' src={productImage}/>
        <div id="relatedAddTextBox">
            <div className="relatedAddText">Add  </div>
            <strong className="relatedAddText">{name} </strong>
            <div className="relatedAddText">To Your Outfit!!</div>
        </div>
    </div>
  );
};

export default AddProductCard;
