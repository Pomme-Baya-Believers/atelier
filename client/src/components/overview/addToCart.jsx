import React, { useState } from 'react';
import SizeSelector from './sizeSelector.jsx';
import QuantitySelector from './quantitySelector.jsx';
import AddToCartButton from './addToCartButton.jsx';

const AddToCart = ({ options }) => {
  // console.log('These are the Add To Cart Options', options);
  const [size, setSize] = useState(null);
  const [quantity, setQuantity] = useState(null);

  const skus = [];
  if (options) {
    for (const [key, value] of Object.entries(options.skus)) {
      if (value.quantity > 0) {
        value.sku_id = key
        skus.push(value)
      }
    }
  }
  // console.log(skus);
  const handleSizeSelect = (e) => {
    console.log(e.target.value);
    setSize(e.target.value);
  };
  const handleQuantitySelect = (e) => {
    console.log(e.target.value);
    setQuantity(e.target.value);
  };
  return (
    <div>
      {skus && <SizeSelector skus={skus}
      handleSizeSelect={handleSizeSelect}/>}
      {skus && <QuantitySelector skus={skus}
      handleQuantitySelect={handleQuantitySelect} size={size}/>}
      {skus.length > 0 && <AddToCartButton skus={skus} size={size} qunatity={quantity} />}
    </div>
  );
};

export default AddToCart;
