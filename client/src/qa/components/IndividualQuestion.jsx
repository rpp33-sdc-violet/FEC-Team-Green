import React, { useState, useEffect } from 'react';

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

  // handle AddAnswerLinkClick
  
  // render
  // Q text
  // Helpful/Yes Link
  // AddAnswerLink - state: AddAnswerLinkClick
  // AnswersList - state: answers (based on countA)
  // moreAnsButton
  
};

export default IndividualQuestion;