import React, { useState } from 'react';

const SizeSelector = ({ skus, handleSizeSelect }) => {
  // console.log(skus);
  return (
    <select id="size" name="size" onChange={handleSizeSelect}>
      {skus.length > 0 && <option value="">--Select Size--</option>}
      {skus.length > 0 && skus.map((sku, index) => {
        // console.log('this is the current sku', sku);
        if (sku.quantity > 0) {
          return (
          <option key={sku.size} value={index}>{sku.size}</option>
          );
        }
        return null;
      })}
      {skus.length === 0 && <option value="">OUT OF STOCK</option>}
    </select>
  );
};

export default SizeSelector;
