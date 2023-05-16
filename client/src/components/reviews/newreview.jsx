/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import React, { useState, useEffect } from 'react';
import apiHelper from './apihelpers.jsx';
import apiHelperSean from '../Related/apihelpers.jsx';

const NewReview = ({ productID, meta }) => {
  const [form, setForm] = useState({ product_id: (productID) });
  const [bodyChars, setBodyChars] = useState(50);
  const [photos, setPhotos] = useState([]);
  const [product, setProduct] = useState([]);
  const [numStars, setNumStars] = useState(0);
  const [selectedChar, setSelectedChar] = useState({});

  useEffect(() => {
    apiHelperSean.getProduct(productID)
      .then(({ data }) => { setProduct(data); })
      .catch((err) => console.error(err));
  }, []);

  const ratingDescriptions = ['', 'Poor', 'Fair', 'Average', 'Good', 'Great'];

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(form).forEach((key) => {
      if (key !== 'photos' && key !== 'characteristics') {
        formData.append(key, form[key]);
      } else if (key === 'characteristics') {
        formData.append(key, JSON.stringify(form[key]));
      } else if (key === 'photos') {
        photos.forEach((photo) => {
          formData.append('photos', photo);
        });
      }
    });
    document.getElementById('newReview').close();
    setForm({ product_id: Number(productID) });
    apiHelper.postReview(formData);
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    if (e.target.parentNode.className === 'newDescription') {
      setForm({ ...form, characteristics: { ...form.characteristics, [name]: Number(value) } });
    } else if (name === 'rating') {
      setForm({ ...form, [name]: Number(value) });
    } else if (name === 'recommend') {
      setForm({ ...form, [name]: Boolean(value) });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const photoHandler = (e) => {
    if (photos.length + e.target.files.length > 5) {
      alert('You can only upload a maximum of 5 photos');
    } else {
      setPhotos([...photos, ...e.target.files]);
    }
  };

  const mouseOverStar = (val) => {
    while (val > 0) {
      document.getElementById(`r${val}l`).innerHTML = '&#9733;';
      document.getElementById(`r${val}l`).style.color = '#fc0';
      val--;
    }
  };

  const mouseOutStar = (val) => {
    while (val > numStars) {
      document.getElementById(`r${val}l`).innerHTML = '&#9734';
      document.getElementById(`r${val}l`).style.color = '';
      val--;
    }
  };

  const mouseClickStar = (val) => {
    setNumStars(val);
    let num = 5;
    while (num > 0) {
      document.getElementById(`r${num}l`).innerHTML = '&#9734';
      document.getElementById(`r${num}l`).style.color = '';
      num--;
    }
    while (val > 0) {
      document.getElementById(`r${val}l`).innerHTML = '&#9733';
      document.getElementById(`r${val}l`).style.color = '#fc0';
      val--;
    }
  };

  const descriptions = {
    Size: ['A size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too big'],
    Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
    Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
    Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
    Length: ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
    Fit: ['Runs tight', 'Runs slightly right', 'Perfect', 'Runs slightly long', 'Runs long'],
  };

  return (
    <dialog id='newReview'>
      <div id='newReviewHeader'>Write Your Review</div>
      <div id='newReviewName'>About the {product.name}</div>
      <form id='newReviewForm' encType="multipart/form-data" onSubmit={(e) => { submitHandler(e); }}
       onChange={(e) => changeHandler(e)}>
        <div id='newRating'>
          <div className='newInputHeader'>Overall rating</div>
            <div id='newStars'>
              <label onMouseOver={() => mouseOverStar(1)} onMouseOut={() => mouseOutStar(1)} onClick={() => mouseClickStar(1)} id='r1l' className='ratingLabels' htmlFor="r1">&#9734;</label>
              <input type='radio' name='rating' id='r1' value={1} hidden required/>
              <label onMouseOver={() => mouseOverStar(2)} onMouseOut={() => mouseOutStar(2)} onClick={() => mouseClickStar(2)} id='r2l' className='ratingLabels' htmlFor="r2">&#9734;</label>
              <input type='radio' name='rating' id='r2' hidden value={2}/>
              <label onMouseOver={() => mouseOverStar(3)} onMouseOut={() => mouseOutStar(3)} onClick={() => mouseClickStar(3)} id='r3l' className='ratingLabels' htmlFor="r3">&#9734;</label>
              <input type='radio' name='rating' id='r3' hidden value={3}/>
              <label onMouseOver={() => mouseOverStar(4)} onMouseOut={() => mouseOutStar(4)} onClick={() => mouseClickStar(4)} id='r4l' className='ratingLabels' htmlFor="r4">&#9734;</label>
              <input type='radio' name='rating' id='r4' hidden value={4}/>
              <label onMouseOver={() => mouseOverStar(5)} onMouseOut={() => mouseOutStar(5)} onClick={() => mouseClickStar(5)} id='r5l' className='ratingLabels' htmlFor="r5">&#9734;</label>
              <input type='radio' name='rating' id='r5' hidden value={5}/>
              &#160;{ratingDescriptions[numStars]}
            </div>
        </div>
        <div id='recommend'>
          <div className='newInputHeader'>Do you recommend this product?</div>
          Yes <input type='radio' name='recommend' value={true} required/>
          No <input type='radio' name='recommend' value={false}/>
        </div>
        <div id='characteristics'>
        <div className='newInputHeader'>Characteristics</div>
          {meta.characteristics && Object.keys(meta.characteristics).map((characteristic) => (
            <div key={characteristic} className='newCharacteristicBlock'>
              <div className='newCharacteristicHeader'>{characteristic}</div>
              <div className='newSelectedCharacteristic'>
                {descriptions[characteristic][selectedChar[characteristic] - 1] || 'none selected'}
              </div>
              <div className='newCharacteristic'>
                {descriptions[characteristic].map((description, idx) => (
                  <div className='newDescription' key={`${characteristic}${idx}`}>
                    <input type='radio' name={meta.characteristics[characteristic].id} id={`${characteristic}${idx}`} value={idx + 1} required onChange={(e) => setSelectedChar({ ...selectedChar, [characteristic]: e.target.value })}/>
                  </div>
                ))}
              </div>
              <div className='newRange'>
                <div>{descriptions[characteristic][0]}</div>
                <div>{descriptions[characteristic][4]}</div>
              </div>
            </div>
          ))}
        </div>
        <div id='summary'>
          <div className='newInputHeader'>Summary </div>
          <input type='text' id='newSummaryInput' name='summary' maxLength='60' placeholder='Example: Best purchase ever!' />
        </div>
        <div id='newBody'>
          <div className='newInputHeader'>Body</div>
          <textarea id='newBodyInput' type='text' name='body' minLength='50' maxLength='1000' placeholder='Why did you like the product or not?' required onChange={(e) => { setBodyChars(50 - e.target.value.length); }}/>
            <div id='newMinChars'>{bodyChars > 0 ? `Minimum required characters left: ${bodyChars}` : 'Minimum reached'}</div>
        </div>
        <div id='photos'>
          <div className='newInputHeader'>Add photos</div>
          <input type="file" name='photos' multiple accept=".png, .jpg, .jpeg" onChange={(e) => photoHandler(e)}/>
          <div className='newPhotos'>
          {photos && photos.map((photo, idx) => (
            <img key={`photo${idx}`} className='newPhoto' src={URL.createObjectURL(photo)}/>))}
          </div>
        </div>
        <div id='name'>
          <div className='newInputHeader'>Nickname</div>
          <input type='text' name='name' maxLength='60' placeholder='Example: jackson11!' required/>
          <div className='newTip'>For privacy reasons, do not use your full name or email address</div>
        </div>
        <div id='email'>
          <div className='newInputHeader'>Email</div>
          <input type='email' name='email' maxLength='60' placeholder='Example: jackson11@email.com' required/>
          <div className='newTip'>For authentication reasons, you will not be emailed</div>
        </div>
        <div id='newButtons'>
          <input value='Cancel' type='button' className='newReviewButton' onClick={() => document.getElementById('newReview').close()}/>
          <input type='submit' className='newReviewButton'/>
        </div>
      </form>
    </dialog>
  );
};

export default NewReview;
