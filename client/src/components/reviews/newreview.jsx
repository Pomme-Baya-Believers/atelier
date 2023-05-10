import React, { useState, useEffect } from 'react';
import apiHelper from './apihelpers.jsx';
import apiHelperSean from '../Related/apihelpers.jsx';

const NewReview = ({ productID, meta }) => {
  const [form, setForm] = useState({ product_id: (productID) });
  const [bodyChars, setBodyChars] = useState(50);
  const [photos, setPhotos] = useState([]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    apiHelperSean.getProduct(productID)
      .then(({ data }) => { setProduct(data); })
      .catch((err) => console.error(err));
  }, []);

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

  const descriptions = {
    Size: ['A size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too wide'],
    Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
    Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
    Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
    Length: ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
    Fit: ['Runs tight', 'Runs slightly right', 'Perfect', 'Runs slightly long', 'Runs long'],
  };

  return (
    <dialog id='newReview'>
      <h2>Write Your Review</h2>
      <h5>About the {product.name}</h5>
      <form encType="multipart/form-data" onSubmit={(e) => { submitHandler(e); }}
       onChange={(e) => changeHandler(e)}>
        {/* make post request on submit */}
        <div id='rating'>
          Overall rating
          {/* make the label for each radio button a star */}
          <input type='radio' name='rating' value={1} required/>
          <input type='radio' name='rating' value={2}/>
          <input type='radio' name='rating' value={3}/>
          <input type='radio' name='rating' value={4}/>
          <input type='radio' name='rating' value={5}/>
        </div>
        <div id='recommend'>
          Do you recommend this product? Yes <input type='radio' name='recommend' value={true} required/>
          No <input type='radio' name='recommend' value={false}/>
        </div>
        <div id='characteristics'>
          Characteristics
          {meta.characteristics && Object.keys(meta.characteristics).map((characteristic) => (
            <div className='newCharacteristic' key={characteristic}>
              {characteristic}
              {descriptions[characteristic].map((description, idx) => (
                <div className='newDescription' key={`${characteristic}${idx}`}>
                  <label htmlFor={`${characteristic}${idx}`}>{description}</label>
                  <input type='radio' name={meta.characteristics[characteristic].id} id={`${characteristic}${idx}`} value={idx + 1} required/>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div id='summary'>
          Summary <input type='text' name='summary' maxLength='60' placeholder='Example: Best purchase ever!' />
        </div>
        <div id='body'>
          Body <input type='text' name='body' minLength='50' maxLength='1000' placeholder='Why did you like the product or not?' required onChange={(e) => { setBodyChars(50 - e.target.value.length); }}/>
            <h6>{bodyChars > 0 ? `Minimum required characters left: ${bodyChars}` : 'Minimum reached'}</h6>
        </div>
        <div id='photos'>
          Add photos <input type="file" name='photos' multiple accept=".png, .jpg, .jpeg" onChange={(e) => setPhotos([...photos, ...e.target.files])}/>
          <div className='newPhotos'>
          {photos && photos.map((photo, idx) => (
            <img key={`photo${idx}`} className='newPhoto' src={URL.createObjectURL(photo)}/>))}
          </div>
        </div>
        <div id='name'>
          Nickname <input type='text' name='name' maxLength='60' required/>
        </div>
        <div id='email'>
          Email
          <input type='email' name='email' maxLength='60' required/>
        </div>
        <input value='Cancel' type='button' onClick={() => document.getElementById('newReview').close()}/>
        <input type='submit'/>
      </form>
    </dialog>
  );
};

export default NewReview;
