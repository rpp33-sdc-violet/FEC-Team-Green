import React, { useState, useEffect } from 'react';

const IndividualAnswer = (props) => { 
  // props
  // question (from AnswersList)
  
  // **potentially in IndividualQuestion to trigger render?**
  const [isHelpfulClickedA, setIsHelpfulClickedA] = useState(false); 
  const [helpfulCountA, setHelpfulCountA] = useState(0);  

  // methods
  // handleHelpfulClick - request to "mark question as helpful" endpoint - **potentially receive a function as props that bubbles to IndividualQuestion to trigger render**

  // handleReportClick - request to "report question" endpoint
  
  // render
  // A text and **photos?**
  // user info
  // Helpful/Yes Link
  // Report Link
  
};

export default IndividualAnswer;