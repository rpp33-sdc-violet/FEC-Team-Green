import React, { useState, useEffect } from 'react';
import AddAnswerLink from './AddAnswerLink.jsx';

const IndividualQuestion = (props) => {
  // props
  // question (from QuestionsList)

  const [answers, setAnswers] = useState([]);
  const [countA, setCountA] = useState(2);
  const [moreAnsButtonVisible, setMoreAnsButtonVisible] = useState(false);
  // **potentially in QA to trigger render**
  const [isHelpfulClickedQ, setIsHelpfulClickedQ] = useState(false); 
  const [helpfulCountQ, setHelpfulCountQ] = useState(0);  

  // methods
  // getAllAnswers/useEffect - update answers and helpfulCount, invoke setMoreAnsButtonVisible

  // isMoreAnsButtonVisible - checks countA with answers length, if countA less than length -> true, else, false

  // handleMoreAButtonClick - increments countA and setState with new countA (should trigger render with more questions), invoke isMoreAButtonVisible

  // handleHelpfulClick - if isHelpfulClicked is false: request to "mark question as helpful" endpoint, isHelpfulClicked to true - **potentially receive a function as props that bubbles to QA to trigger render**
  const handleHelpfulClick = (event) => {
    event.preventDefault();
    console.log('handleHelpfulClick clicked');
  };

  // handle AddAnswerLinkClick
  
  // render
  // Q text
  // Helpful/Yes Link
  // AddAnswerLink - state: AddAnswerLinkClick
  // *****AnswersList - state: answers (based on countA)
  // moreAnsButton
  return (
    <div className='question-row'>
      <p className='question-text'>Q: {props.question.question_body}</p>
      <p className='helpful-text'>Helpful? <a href='/' onClick={handleHelpfulClick}>Yes </a>({props.question.question_helpfulness}) | <AddAnswerLink /></p>
      {/* CONTINUE HERE WITH AnswersList*/}
    </div>
  );
  
};

export default IndividualQuestion;