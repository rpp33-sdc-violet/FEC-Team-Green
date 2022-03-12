import React from 'react';
import IndividualQuestion from './IndividualQuestion.jsx';

const QuestionsList = (props) => {
  // props: filteredQues (from QA)
  const questions = props.questions.map((question) => 
    <IndividualQuestion
      key={question.question_id}
      question={question}
      product_name={props.product_name}
      theme={props.theme}/>
  );
  
  // render: maps to IndividualQuestion
  return (
    <div className="questions-list">
      {questions}
    </div>
  );
};

export default QuestionsList;