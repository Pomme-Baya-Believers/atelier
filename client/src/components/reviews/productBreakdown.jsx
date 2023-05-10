import React from 'react';

const ProductBreakdown = ({ meta }) => {
  let characteristics;
  const values = [];
  if (meta.characteristics) {
    characteristics = Object.keys(meta.characteristics);
    characteristics.forEach((characteristic) => {
      values.push((meta.characteristics[characteristic].value / 5) * 100);
    });
  }
  const descriptions = {
    Size: ['A size too small', 'A size too big'],
    Width: ['Too narrow', 'Too wide'],
    Comfort: ['Uncomfortable', 'Perfect'],
    Quality: ['Poor', 'Perfect'],
    Length: ['Runs short', 'Runs long'],
    Fit: ['Runs tight', 'Runs long'],
  };

  return (
    <div id='productBreakdown'>
      {characteristics && characteristics.map((characteristic, idx) => (
        <div key={characteristic} className='breakdownCharacteristic'>{characteristic}
          <div className='breakdownBar'>
            <i id='triangle-down' style={{ left: `${values[idx]}%` }}></i>
          </div>
          <div className='breakdownDescriptions'>
            <div>{descriptions[characteristic][0]}</div>
            <div>{descriptions[characteristic][1]}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductBreakdown;
