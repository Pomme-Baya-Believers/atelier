import React, { useState } from 'react';

const NewReview = ({ productID }) => {
  const [form, setForm] = useState({ product_id: productID });
  const [bodyChars, setBodyChars] = useState(50);
  // need to pass meta data into here.
  // use meta.characteristics to determine characteristics to show
  // make handler specific to characteritics so I can set id: value
  // key value pairs inside of characteristics object to eventually
  // push to form state
  //
  // figure out photos section.

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <dialog id='newReview'>
      <h2>Write Your Review</h2>
      <h5>About the productnamehere</h5>
      <form onSubmit={() => {}}>
        {/* make post request on submit */}
        <div id='rating'>
          Overall rating
          {/* make the label for each radio button a star */}
          <input type='radio' name='rating' value='1' onChange={(e) => changeHandler(e)}/>
          <input type='radio' name='rating' value='2' onChange={(e) => changeHandler(e)}/>
          <input type='radio' name='rating' value='3' onChange={(e) => changeHandler(e)}/>
          <input type='radio' name='rating' value='4' onChange={(e) => changeHandler(e)}/>
          <input type='radio' name='rating' value='5' onChange={(e) => changeHandler(e)}/>
        </div>
        <div id='recommend'>
          Do you recommend this product? Yes <input type='radio' name='recommend' value='true' onChange={(e) => changeHandler(e)}/>
          No <input type='radio' name='recommend' value='false' onChange={(e) => changeHandler(e)}/>
        </div>
        <div id='characteristics'>
          Characteristics
          {/* map 5 radio buttons per characteristic relevant to product. Add handler. */}
          <input type='radio'/>
          <input type='radio'/>
          <input type='radio'/>
          <input type='radio'/>
          <input type='radio'/>
        </div>
        <div id='summary'>
          Summary <input type='text' name='summary' maxLength='60' placeholder='Example: Best purchase ever!' onChange={(e) => changeHandler(e)}/>
        </div>
        <div id='body'>
          Body <input type='text' name='body' minLength='50' maxLength='1000' placeholder='Why did you like the product or not?' onChange={(e) => { setBodyChars(50 - e.target.value.length); changeHandler(e); }}/>
            <h6>{bodyChars > 0 ? `Minimum required characters left: ${bodyChars}` : 'Minimum reached'}</h6>
        </div>
        <div id='photos'>
          Add photos <input type="file" accept=".png, .jpg, .jpeg"/>
          {/* show photo thumbnails. Max 5 photos */}
        </div>
        <div id='name'>
          Nickname <input type='text' name='name' maxLength='60' onChange={(e) => changeHandler(e)}/>
        </div>
        <div id='email'>
          Email
          <input type='email' name='email' maxLength='60' onChange={(e) => changeHandler(e)}/>
        </div>
        <input value='Cancel' type='button' onClick={() => document.getElementById('newReview').close()}/>
        <input type='submit'/>
      </form>
    </dialog>
  );
};

export default NewReview;
