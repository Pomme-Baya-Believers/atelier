import React, { useState } from 'react';

const NewReview = ({ productID, meta }) => {
  const [form, setForm] = useState({ product_id: productID });
  const [bodyChars, setBodyChars] = useState(50);
  const [photos, setPhotos] = useState([]);

  // figure out photos section.

  const changeHandler = (e) => {
    const { name, value } = e.target;
    if (e.target.parentNode.className === 'newDescription') {
      setForm({ ...form, characteristics: { ...form.characteristics, [name]: value } });
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
      <h5>About the productnamehere</h5>
      <form onSubmit={() => { console.log('submitted'); }} onChange={(e) => changeHandler(e)}>
        {/* make post request on submit */}
        <div id='rating'>
          Overall rating
          {/* make the label for each radio button a star */}
          <input type='radio' name='rating' value='1'/>
          <input type='radio' name='rating' value='2'/>
          <input type='radio' name='rating' value='3'/>
          <input type='radio' name='rating' value='4'/>
          <input type='radio' name='rating' value='5'/>
        </div>
        <div id='recommend'>
          Do you recommend this product? Yes <input type='radio' name='recommend' value='true'/>
          No <input type='radio' name='recommend' value='false'/>
        </div>
        <div id='characteristics'>
          Characteristics
          {meta.characteristics && Object.keys(meta.characteristics).map((characteristic) => (
            <div className='newCharacteristic' key={characteristic}>
              {characteristic}
              {descriptions[characteristic].map((description, idx) => (
                <div className='newDescription' key={`${characteristic}${idx}`}>
                  <label htmlFor={`${characteristic}${idx}`}>{description}</label>
                  <input type='radio' name={meta.characteristics[characteristic].id} id={`${characteristic}${idx}`} value={idx + 1}/>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div id='summary'>
          Summary <input type='text' name='summary' maxLength='60' placeholder='Example: Best purchase ever!' />
        </div>
        <div id='body'>
          Body <input type='text' name='body' minLength='50' maxLength='1000' placeholder='Why did you like the product or not?' onChange={(e) => { setBodyChars(50 - e.target.value.length); }}/>
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
          Nickname <input type='text' name='name' maxLength='60' />
        </div>
        <div id='email'>
          Email
          <input type='email' name='email' maxLength='60' />
        </div>
        <input value='Cancel' type='button' onClick={() => document.getElementById('newReview').close()}/>
        <input type='submit'/>
      </form>
    </dialog>
  );
};

export default NewReview;
