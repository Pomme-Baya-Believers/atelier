import React from 'react';
import StyleThumbnail from './styleThumbnail.jsx';

function StyleSelector({ styles, style, handleStyleClick }) {
  // console.log('These are the styles', styles);
  // console.log('this is the style currently pointed to', styles[style]);
  const styleContHeight = { 'max-height': `${(100 / Math.ceil(styles.length / 4))}%` };
  return (
    <div className="overviewStyleSelector">
      {styles[style] && <div>Style {'>'} {styles[style].name}</div>}
      {styles && Array(Math.ceil(styles.length / 4)).fill().map((number, ind) => {
        console.log(styles);
        console.log(style);
        console.log(ind);
        return (
          <div key={ind} className={`styleCont ${ind}`} style={styleContHeight}>
            {styles.slice(ind * 4, (ind + 1) * 4).map((option, index) => {
              const pointerInd = (ind * 4) + index;
              if (styles[style].style_id === option.style_id) {
                return <StyleThumbnail index={pointerInd} key={pointerInd} selected={true}
                option={option} handleStyleClick={handleStyleClick}/>;
              }
              return (<StyleThumbnail index={pointerInd} key={pointerInd} selected={false}
                option={option} handleStyleClick={handleStyleClick}/>);
            })}
          </div>
        );
      })}
    </div>
  );
}

export default StyleSelector;
