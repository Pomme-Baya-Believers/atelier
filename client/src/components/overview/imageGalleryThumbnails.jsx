import React, { useState } from 'react';

const ImageGalleryThumbnails = ({ photos, mainPic, handleThumbClick }) => {
  const [thumbnailPosition, setThumbnailPosition] = useState(0);
  const displayCheck = thumbnailPosition + 7;
  const HandleArrowClick = (e) => {
    const direction = e.target.getAttribute('class');
    if (direction.includes('up')) {
      setThumbnailPosition(thumbnailPosition - 1);
    } else if (direction.includes('down')) {
      setThumbnailPosition(thumbnailPosition + 1);
    }
  };
  return (
    <div className="imageGalleryThumbs">
        {thumbnailPosition !== 0 && <i className="arrow up" onClick={(e) => {
          if (thumbnailPosition !== 0) {
            HandleArrowClick(e);
          }
        }}></i>}
        {photos.length > 0 && photos.map((photo, index) => {
          if (index >= thumbnailPosition && index < displayCheck) {
            return (
            <img
              className={index === mainPic ? 'selected overviewThumb' : 'overviewThumb'} key={index} value={index} src={photo.thumbnail_url} onClick={(e) => handleThumbClick(e)} />
            );
          }
          return null;
        })}
        {displayCheck < photos.length && <i className="arrow down" onClick={(e) => HandleArrowClick(e)}></i>}
    </div>
  );
};

export default ImageGalleryThumbnails;
