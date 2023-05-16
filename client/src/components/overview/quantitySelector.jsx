import React from 'react';

const QuantitySelector = ({ skus, handleQuantitySelect, size }) => {
  // console.log(skus);
  const quantityOptions = [];
  if (skus.length > 0 && size) {
    const max = skus[size].quantity > 15 ? 15 : skus[size].quantity;
    for (let i = 1; i <= max; i += 1) {
      quantityOptions.push(i);
    }
  }
  return (
    <select name="quantity" onChange={handleQuantitySelect} disabled={!size}>
      {!size && <option>-</option>}
      {quantityOptions.length > 0
      && quantityOptions.map((quant) => <option key={quant}>{quant}</option>)}
    </select>
  );
};

export default QuantitySelector;
