/* eslint-disable prefer-destructuring */
import React from 'react';

const PriceStrike = ({ styles, selectedStyle }) => {
  let defaultStyle = [];
  let priceComponent = <div>price</div>;
  if (styles) {
    // eslint-disable-next-line arrow-body-style
    defaultStyle = styles.data.results.filter((style) => {
      return style['default?'];
    });
    defaultStyle = defaultStyle[0];
    if (defaultStyle === undefined) {
      defaultStyle = styles.data.results[0];
    }
    const defaultPrice = defaultStyle.original_price;
    let salePrice = defaultStyle.sale_price;
    salePrice = '49.00'; // UNCOMMENT for quick check for STRIKETHROUGH
    if (salePrice === null) {
      priceComponent = <div className="relatedPrice">{`$${defaultPrice}`}</div>;
    } else {
      priceComponent = <div >
      <div className="relatedPriceStrike">{`$${defaultPrice}`}</div>
      <div className="relatedPrice">{`$${salePrice} Sale Price`}</div>
    </div>;
    }
  }

  // *SHOULD* bw ready to receive a SPECIFIC STYLE as a prop]
  if (selectedStyle) {
    const selectedDefaultPrice = selectedStyle.original_price;
    const selectedSalePrice = selectedStyle.sale_price;
    if (selectedSalePrice === null) {
      priceComponent = <div className="relatedPrice">{`$${selectedDefaultPrice}`}</div>;
    } else {
      priceComponent = <div >
      <div className="relatedPriceStrike">{`$${selectedDefaultPrice}`}</div>
      <div className="relatedPrice">{`$${selectedDefaultPrice}`}</div>
    </div>;
    }
  }

  return (
    <>
    {priceComponent}
    </ >
  );
};

export default PriceStrike;
