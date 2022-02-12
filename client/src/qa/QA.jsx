import React, { useState, useEffect } from 'react';

const QA = (props) => {
  
  const [allQues, setAllQues] = useState([]);
  const [filteredQues, setFilteredQues] = useState([]);
  const [countQ, setCountQ] = useState(2);
  const [moreQButtonVisible, setMoreQButtonVisible] = useState(false);
  const [query, setQuery] = useState(''); // NOT SURE IF NEEDED

  // getAllQuestions  - update allQuestions (and filteredQuestions?) with the same data, invoke isMoreQButtonVisible
  useEffect(() => {

  });

  // isMoreQButtonVisible - checks countQ with allQuestions length, if countQ less than length -> true, else, false

  // handleMoreQButtonClick - increments countQ and setState with new countQ (should trigger render with more questions), invoke isMoreQButtonVisible

  // userSearch - if query length is less than 3, then setState with query and filteredQuestions with allQuestions; if more - loop over allQuestions (and their answers) to see if query matches -> if yes, push that element into filter container -> when complete, setState with query and filteredQuestions with filter container

  return (
    <h3>QUESTIONS & ANSWERS</h3>
    // Search - state: userSearch
    // QuestionsList -  state: filteredQuestions (based on countQ)
    // MoreAnsweredQuestionsButton (component? or just as element?) - only visible if moreQButtonVisible is true
    // AddAQuestionButton
  );
};

export default QA;