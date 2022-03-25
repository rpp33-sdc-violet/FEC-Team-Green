import React, { useState, useEffect, Suspense } from 'react';
import axios from 'axios';
import AddAQuestionDashboard from './components/AddAQuestionDashboard.jsx';
import QuestionsList from './components/QuestionsList.jsx';
import Search from './components/Search.jsx';
import './styles/style.css';

const QA = (props) => {
  // props: product_id, product_name

  const [allQues, setAllQues] = useState([]);
  const [filteredQues, setFilteredQues] = useState([]);
  const [countQ, setCountQ] = useState(2);
  const [moreQButtonVisible, setMoreQButtonVisible] = useState(false);

  // getAllQuestions  - update allQuestions and filteredQuestions with the same data
  useEffect(() => {
    const count = 20; // start with a high number to avoid too many calls to the API
    let page = 1;
    let questions = [];
    // inner function that keeps calling until length of data is less than the count
    const getAllQuestions = () => {
      const req = {
        params: {
          productId: props.product_id,
          count: 20,
          page: 1
        }
      };
      axios.get('/getQuestions', req)
        .then((response) => {
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
  }, [props.product_id]); // the empty array stops the effect from running more than once

  // isMoreQButtonVisible - checks countQ with allQues length, if countQ less than length -> true, else, false
  useEffect(() => {
    if (countQ < filteredQues.length) {
      setMoreQButtonVisible(true);
    } else {
      setMoreQButtonVisible(false);
    }
  });

  // handleMoreQButtonClick - setCountQ with countQ + 2 (should trigger render with more questions)
  const handleMoreQButtonClick = () => {
    setCountQ(countQ + 2);
  };

  // userSearch: send as props to Search component
  const userSearch = (query) => {
    // query length is 3 or more:
    if (query.length >= 3) {
      let queryLC = query.toLowerCase();
      let matches = [];
      // loop over allQues to see if query matches
      for (let i = 0; i < allQues.length; i++) {
        let questionLC = allQues[i].question_body.toLowerCase();
        // if yes, add to into matches container
        if (questionLC.indexOf(queryLC) > -1) {
          matches = matches.concat(allQues[i]);
        }
      }
      // after loop finished, setFilteredQues with query matches
      setFilteredQues(matches);
    } else {
      // query length is less than 3: setFilteredQues with allQues
      setFilteredQues(allQues);
    }
  };

  return (
    // CHANGE REQUEST: onClick listener to entire QA widget container
    <div onClick={props.interactions} className="QA-container">
      <h1 className="QA-header">QUESTIONS & ANSWERS</h1>
      {/* <Suspense fallback={<h2>Loading...</h2>}> */}
      <Search userSearch={userSearch} theme={props.theme} />
      <QuestionsList questions={filteredQues.slice(0, countQ)} product_name={props.product_name} theme={props.theme} />
      <div className="QA-buttons">
        {moreQButtonVisible ? <button id={`moreQuestions-button-${props.theme}`} onClick={handleMoreQButtonClick}>MORE ANSWERED QUESTIONS</button> : null}
        <AddAQuestionDashboard product_id={props.product_id} product_name={props.product_name} theme={props.theme} />
      </div>
      {/* </Suspense> */}
    </div>
  );
};

export default QA;