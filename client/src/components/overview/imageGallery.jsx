import React, { useState, useEffect } from 'react';
import ImageGalleryThumbnails from './imageGalleryThumbnails.jsx';

const ImageGallery = ({ styles, style, productID, view, handleMainPicClick }) => {
  const [mainPic, setMainPic] = useState(0);
  const { photos } = styles[style];

  useEffect(() => {
    setMainPic(0);
  }, [productID]);
  if (styles) {
    // console.log('Image Gallery styles ', styles);
  }
  const handleThumbClick = (e) => {
    console.log(e.target.getAttribute('class'));
    setMainPic(Number(e.target.getAttribute('value')));
  };
  const HandleArrowClick = (e) => {
    const direction = e.target.getAttribute('class');
    if (direction.includes('left')) {
      setMainPic(mainPic - 1);
    } else if (direction.includes('right')) {
      setMainPic(mainPic + 1);
    }
  };
  return (
    <div className="imageGallery">
      {typeof mainPic === 'number' && <ImageGalleryThumbnails handleThumbClick={handleThumbClick}
      photos={photos} mainPic={mainPic} />}
      {mainPic > 0 && <i className="arrow left" onClick={(e) => HandleArrowClick(e)}></i>}
      {photos.length > 0 && <img className={`overviewMainPic ${view}`} src={photos[mainPic].url} onClick={(e) => handleMainPicClick(e)}/>}
      {mainPic < photos.length - 1 && <i className="arrow right" onClick={(e) => HandleArrowClick(e)}></i>}
    </div>
  );
};

export default ImageGallery;
