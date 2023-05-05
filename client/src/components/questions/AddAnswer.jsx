import React from 'react';

const AddAnswer = () => {

  return (
    <div>
      <label for='add-answer'>
        Your Answer:
      </label>
      <textarea id='add-answer' name='add-answer' rows='5' cols='200' required>
        Enter your answer...
      </textarea>

      <label for='nickname'>
        Your Nickname:
      </label>
      <input type='text' id='nickname' name='nickname' maxlength='60' placeholder='your nickname...' required></input>

      <label for='email'>
        Your Email:
      </label>
      <input type='text' id='email' name='email' maxlength='60' placeholder='your email...' required></input>

      <label for='photos'>
        Upload Your Photos
      </label>
      <input type='file' id='photos' name='photos' accept='image/png, image/jpeg, image/svg'></input>
      <button>Submit Answer</button>
    </div>
  )
}

export default AddAnswer;