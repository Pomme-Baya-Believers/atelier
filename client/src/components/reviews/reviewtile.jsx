import React, { useState } from 'react';
import Stars from './reviewStarRating.jsx';

const ReviewTile = ({ review }) => {
  const [bodyDisplay, setBodyDisplay] = useState(review.body.slice(0, 250));
  const readableDate = new Date(review.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
  <div className='reviewTile'>
    <header className='reviewHeader'>
      <div className='reviewTileStars'><Stars averageRating={review.rating}/></div>
      <div>{review.reviewer_name} {readableDate}</div>
    </header>
    <section className='reviewContent'>
      <h3 id='reviewSummary'>{review.summary}</h3>
      <div id='reviewBody'>
        <div>{bodyDisplay}</div>
        {review.body.length > 251 && bodyDisplay === review.body.slice(0, 250)
        && <button className='reviewShowMore' onClick={() => setBodyDisplay(review.body)}>Show more</button>}
      </div>
      {review.recommend ? <p>&#x2714;{'I recommend this product'}</p> : null}
      <div className='reviewAllPhotos'>
        {review.photos && review.photos.map((photo) => (
          <div className='reviewPhoto' key={photo.url}>
            <img onClick={() => document.getElementById(`${photo.url}`).showModal()} className='reviewThumbnail' src={photo.url}/>
            <dialog id={photo.url} onClick={() => document.getElementById(`${photo.url}`).close()}>
              <img src={photo.url}/>
            </dialog>
        </div>
        ))}
      </div>
    </section>
    {review.response
    && <div className='reviewResponse'>
      <div className='responseHeader'>Response from seller</div>
      <div>{review.response}</div>
    </div>}
    <footer className='reviewFooter'>
      Helpful? Yes {review.helpfulness}
    </footer>
  </div>
  );
};

export default ReviewTile;
