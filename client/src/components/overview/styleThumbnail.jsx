import React from 'react';

function StyleThumbnail({
  index, selected, option, handleStyleClick,
}) {
  return (
    <div value={index}>Style Thumbnail{selected && ' This is the selected style'}<img src={option.photos[0].thumbnail_url} alt={option.name} value={index} onClick={() => handleStyleClick(index)}/></div>
  );
}

export default StyleThumbnail;
