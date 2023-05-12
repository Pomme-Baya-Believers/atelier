import React from 'react';
import axios from 'axios';

const AddToCartButton = ({ sku, quantity }) => {
  axios.get('/matthew/cart')
    .then((response) => console.log('This is the Cart reponse', response))
    .catch((response) => console.log('Whoops on the cart grab', response));
  const HandleAddClick = (item, amount) => {
    for (let i = 0; i < amount; i += 1) {
      axios.post('/matthew/cart', { sku_id: item.sku_id })
        .then((response) => {
          console.log('Congrats you added things to the cart', response);
        })
        .catch((response) => {
          console.log('There was an error posting the items to the Cart ', response);
        });
    }
  };
  return (
    <div>
      {sku && <button
      onClick={() => HandleAddClick(sku, quantity)}>Add To Cart</button>}

    </div>
  );
};

export default AddToCartButton;
