import React, { useState } from 'react';

const SizeSelector = ({ skus, handleSizeSelect }) => {
  // console.log(skus);
  return (
    <h2 className="SizeSelect"><select id="size" name="size" onChange={handleSizeSelect}>
      {skus.length > 0 && <option value=""><h2>--Select Size--</h2></option>}
      {skus.length > 0 && skus.map((sku, index) => {
        // console.log('this is the current sku', sku);
        if (sku.quantity > 0) {
          return (
          <option key={sku.size} value={index}><h2 >{sku.size}</h2></option>
          );
        }
        return null;
      })}
      {skus.length === 0 && <option value="">OUT OF STOCK</option>}
    </select></h2>
  );
};

export default SizeSelector;
