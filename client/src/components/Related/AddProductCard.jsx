import React from 'react';

const AddProductCard = ({ mainData, setStorage, styles }) => {
  let productImage;
  console.log('In ADD PRODUCT', styles)
  if (styles) {
    productImage = styles.results[0].photos[0].thumbnail_url;
    // setProductImage(styles.results[0].photos[0].thumbnail_url);
  }

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
