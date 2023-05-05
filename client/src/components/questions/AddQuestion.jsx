import React from 'react';

const AddQuestion = () => {

  return (
    <div>
      <label for='add-question'>
        Your Question:
      </label>
      <textarea id='add-question' name='add-question' rows='5' cols='200' required>
        Enter your question...
      </textarea>

      <label for='nickname'>
        Your Nickname:
      </label>
      <input type='text' id='nickname' name='nickname' maxlength='60' placeholder='your nickname...' required></input>

      <label for='email'>
        Your Email:
      </label>
      <input type='text' id='email' name='email' maxlength='60' placeholder='your email...' required></input>

      <button>Submit Question</button>
    </div>
  )
}

export default AddQuestion;