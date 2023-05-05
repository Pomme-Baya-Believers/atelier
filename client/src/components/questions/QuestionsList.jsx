import React, { useState, useEffect } from 'react';
import SearchQuestions from './SearchQuestions.jsx';
import Questions from './Questions.jsx';
import AddQuestion from './AddQuestion.jsx';

const QuestionsList = () => {

  return (
    <div>
      <SearchQuestions/>
      <Questions/>
      <button>More Answered Questions</button>
      <button>Add a Question</button>
    </div>
  )
}

export default QuestionsList;