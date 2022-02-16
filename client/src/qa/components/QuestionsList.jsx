import React, { useState, useEffect } from 'react';
import IndividualQuestion from './IndividualQuestion.jsx';

const QuestionsList = (props) => {
  // props: filteredQues (from QA)
  const questions = props.questions.map((question) => 
    <IndividualQuestion
      key={question.question_id}
      question={question}/>
  );
  
  // render: maps to IndividualQuestion
  return (
    <div className="questions-list">
      {questions}
    </div>
  );
};

export default QuestionsList;