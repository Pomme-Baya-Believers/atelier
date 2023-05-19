import React from 'react';
import apiHelper from './apihelpers.jsx';

const AddToCartButton = ({ sku, quantity }) => {
  const HandleAddClick = apiHelper.addToCart;
  return (
    <div className="addToCartButton">
      <button disabled={!sku} onClick={() => HandleAddClick(sku, quantity)}><h2>Add To Cart</h2></button>

    </div>
  );
};

export default AddToCartButton;
