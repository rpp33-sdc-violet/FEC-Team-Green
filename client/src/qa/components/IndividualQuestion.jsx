import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddAnswerLink from './AddAnswerLink.jsx';
import AnswersList from './AnswersList.jsx';


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
  useEffect(() => {
    const count = 20; // start with a high number to avoid too many calls to the API
    let page = 1;
    let answers = [];
    // inner function that keeps calling until length of data is less than the count
    const getAllAnswers = () => {
      axios.get(`/api/qa/questions/${props.question.question_id}/answers?count=${count}&page=${page}`)
        .then((response) => {
          answers = answers.concat(response.data.results);
          if (response.data.results.length === count) { // there are still more answers
            page++; // increment page to get more answers
            getAllAnswers();
          } else { // length is less than count so all answers have been retrieved
            // loop over all answers
            for (let i = 0; i < answers.length; i++) {
              // if the current element's answerer_name is Seller
              if (answers[i].answerer_name === 'Seller') {
                // save seller answer data
                let seller = answers[i];
                // remove from current position
                answers.splice(i, 1);
                // unshift to front of array
                answers.unshift(seller);
              }
            }
            setAnswers(answers);
            return;
          }
        })
        .catch((error) => {
          console.log('ERROR IN getAllAnswers', error);
        });
    };
    // invoke the recursive inner function
    getAllAnswers();
  }, []); // the empty array stops the effect from running more than once

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
    <div className="question">
      <div className="question-row">
        <p className="question-text">Q: {props.question.question_body}</p>
        <p className="helpfulQ-addAnswerLink">Helpful? <a href='/' onClick={handleHelpfulClick}>Yes </a>({props.question.question_helpfulness}) | <AddAnswerLink /></p>
      </div>
      {/* CONTINUE HERE WITH AnswersList*/}
      <AnswersList />
      <div className="moreAnswers-option">
        <p>LOAD/SEE MORE ANSWERS</p>
      </div>
    </div>
  );

};

export default IndividualQuestion;