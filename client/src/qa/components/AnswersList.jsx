import React, { useState, useEffect } from 'react';
import IndividualAnswer from './IndividualAnswer.jsx';

const AnswersList = (props) => { 
  // props: answers (from IndividualQuestion)
  const answers = props.answers.map((answer) => 
    <IndividualAnswer
      key={answer.answer_id}
      answer={answer}/>
  );
  
  // render: maps to IndividualAnswer
  return (
    <div className="answers-list">
      {answers}
    </div>
  );
};

export default AnswersList;