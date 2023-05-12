import React from 'react';
import StyleThumbnail from './styleThumbnail.jsx';

function StyleSelector({ styles, style, handleStyleClick }) {
  console.log('These are the styles', styles);
  console.log('this is the style currently pointed to', style);

  return (
    <div>
      {styles[style] && <div>Style {'>'} {styles[style].name}</div>}
      {styles && styles.map((option, index) => {
        console.log(option);
        console.log(style);
        console.log(index);
        if (style === index) {
          return <StyleThumbnail index={index} key={index} selected={true}
          option={option} handleStyleClick={handleStyleClick}/>;
        }
        return (<StyleThumbnail index={index} key={index} selected={false}
          option={option} handleStyleClick={handleStyleClick}/>);
      })}
    </div>
  );
}

export default StyleSelector;
