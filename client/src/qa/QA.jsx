import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddAQuestionButton from './components/AddAQuestionButton.jsx';
import QuestionsList from './components/QuestionsList.jsx';
import Search from './components/Search.jsx';

const QA = (props) => {
  
  const [allQues, setAllQues] = useState([]);
  const [filteredQues, setFilteredQues] = useState([]);
  const [countQ, setCountQ] = useState(2);
  const [moreQButtonVisible, setMoreQButtonVisible] = useState(false);
  const [query, setQuery] = useState(''); // NOT SURE IF NEEDED

  // getAllQuestions  - update allQuestions (and filteredQuestions?) with the same data, invoke isMoreQButtonVisible
  useEffect(() => {
    console.log('get all questions');
    const count = 20; // start with a high number to avoid too many calls to the API
    let page = 1; 
    let questions = []; 
    // inner function that keeps calling until length of data is less than the count
    const getAllQuestions = () => {
      axios.get(`/api/qa/questions?product_id=${props.product_id}&count=${count}&page=${page}`)
        .then((response) => {
          console.log('RESPONSE DATA', response.data, response.data.results.length);
          questions = questions.concat(response.data.results);
          if (response.data.results.length === count) { // there are still more questions
            page++; // increment page to get more questions
            getAllQuestions();
          } else { // length is less than count so all questions have been retrieved
            setAllQues(questions);
            setFilteredQues(questions);
            return;
          }
        })
        .catch((error) => {
          console.log('ERROR IN getAllQuestions', error);
        });
    };
    // invoke the recursive inner function
    getAllQuestions(); 
  }, []); // the empty array stops the effect from running more than once

  // isMoreQButtonVisible - checks countQ with allQues length, if countQ less than length -> true, else, false
  useEffect(() => {
    if (countQ < filteredQues.length) {
      setMoreQButtonVisible(true);
    } else {
      setMoreQButtonVisible(false);
    }
  });

  // handleMoreQButtonClick - increments countQ and setState with new countQ (should trigger render with more questions)
  const handleMoreQButtonClick = () => {
    setCountQ(countQ + 2);
  };

  // userSearch - if query length is less than 3, then setState with query and filteredQuestions with allQuestions; if more - loop over allQuestions (and their answers) to see if query matches -> if yes, push that element into filter container -> when complete, setState with query and filteredQuestions with filter container
  const userSearch = (query) => {
    if (query.length >= 3) {
      console.log('3+ QUERY', query);
    } else {
      console.log('< 3 QUERY', query);
    }
  };

  return (
    <div>
      <h3>QUESTIONS & ANSWERS</h3>
      <Search userSearch={userSearch}/>
      <QuestionsList questions={filteredQues.slice(0, countQ)}/>
      { moreQButtonVisible ? <button onClick={handleMoreQButtonClick}>MORE ANSWERED QUESTIONS</button> : null }
      <AddAQuestionButton />
    </div>
    // Search - state: userSearch
    // QuestionsList -  state: filteredQuestions (based on countQ)
  );
};

export default QA;