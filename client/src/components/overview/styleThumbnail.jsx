import React from 'react';

function StyleThumbnail({
  index, selected, option, handleStyleClick,
}) {
  return (
    <div value={index} className={'overviewStyleThumb'}>
        {selected && <div className="styleCheck">&#x2714;</div>}
        <img className="overviewStyleThumbImg" src={option.photos[0].thumbnail_url} alt={option.name} value={index} onClick={() => handleStyleClick(index)}/>
      </div>
  );
}

export default StyleThumbnail;
