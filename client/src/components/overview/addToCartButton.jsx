import React from 'react';
import axios from 'axios';

const AddToCartButton = ({ skus }) => {
  const showSizeSelect = (element) => {
    const event = document.createEvent('MouseEvents');
    event.initMouseEvent('mousedown', true, true, window);
    element.dispatchEvent(event);
  };

  window.runThis = () => {
    const sizeSelector = document.getElementById('size');
    showSizeSelect(sizeSelector);
  };
  console.log();
  return (
    <div>
      {skus.length > 0 && <button onClick={(e) => window.runThis(e)}>Add To Cart</button>}
    </div>
  );
};

export default AddToCartButton;
