import React from 'react';
import apiHelper from './apihelpers.jsx';

const AddToCartButton = ({ sku, quantity }) => {
  // axios.get('/matthew/cart')
  //   .then((response) => console.log('This is the Cart reponse', response))
  //   .catch((response) => console.log('Whoops on the cart grab', response));
  const HandleAddClick = apiHelper.addToCart;
  return (
    <div>
      <button disabled={!sku} onClick={() => HandleAddClick(sku, quantity)}>Add To Cart</button>

    </div>
  );
};

export default AddToCartButton;
