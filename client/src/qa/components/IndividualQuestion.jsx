import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddAnswerDashboard from './AddAnswerDashboard.jsx';
import AnswersList from './AnswersList.jsx';


const IndividualQuestion = (props) => {
  // props
  // question (from QuestionsList)

  const [answers, setAnswers] = useState([]);
  const [countA, setCountA] = useState(2);
  const [moreAnsButtonVisible, setMoreAnsButtonVisible] = useState(false);
  const [isHelpfulClickedQ, setIsHelpfulClickedQ] = useState(false);
  const [helpfulCountQ, setHelpfulCountQ] = useState(props.question.question_helpfulness);
  const [moreAnsButtonText, setMoreAnsButtonText] = useState('LOAD MORE ANSWERS');

  // getAllAnswers/useEffect
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
          alert('ERROR IN getAllAnswers', error);
        });
    };
    // invoke the recursive inner function
    getAllAnswers();
  }, []); // the empty array stops the effect from running more than once

  // isMoreAnsButtonVisible - checks if there are more than 2 answers total; if yes, button is visible (true)
  useEffect(() => {
    if (answers.length > 2) {
      setMoreAnsButtonVisible(true);
    } else {
      setMoreAnsButtonVisible(false);
    }
  });

  // handleMoreAnsClick - changes countA and button text 
  const handleMoreAnsClick = (event) => {
    event.preventDefault();
    if (moreAnsButtonText === 'LOAD MORE ANSWERS') {
      // change countA to all the answers
      const fullList = answers.length;
      setCountA(fullList);
      // change button text to allow view to just 2 answers
      setMoreAnsButtonText('COLLAPSE ANSWERS');
    } else {
      // revert back to only 2 answers
      setCountA(2);
      // change button text to allow view of all answers if clickec
      setMoreAnsButtonText('LOAD MORE ANSWERS');
    }
  };

  // handleHelpfulClick - if isHelpfulClicked is false: request to "mark question as helpful" endpoint, isHelpfulClicked to true 
  const handleHelpfulClick = (event) => {
    event.preventDefault();
    if (!isHelpfulClickedQ) {
      axios.put(`/api/qa/questions/${props.question.question_id}/helpful`)
        .then((response) => {
          setHelpfulCountQ(helpfulCountQ + 1);
          setIsHelpfulClickedQ(true);
        })
        .catch((error) => {
          alert('Question: Helpful Link Already Clicked');
        });
    } else {
      alert('Question: Helpful Link Already Clicked');
    }
  };

  // handle AddAnswerLinkClick ***** TODO *****

  // AddAnswerLink - state: AddAnswerLinkClick ***** TODO *****
  return (
    <div className="question" role="question">
      <div className="question-row">
        <p className="question-text">Q: {props.question.question_body}</p>
        <p className="helpfulQ-addAnswerLink">Helpful? <a href='/' onClick={handleHelpfulClick}>Yes </a>({helpfulCountQ}) | <AddAnswerDashboard /></p>
      </div>
      <AnswersList answers={answers.slice(0, countA)} />
      <div className="moreAnswers-option">
        {moreAnsButtonVisible ? <p onClick={handleMoreAnsClick}><strong>{moreAnsButtonText}</strong></p> : null}
      </div>
    </div>
  );

};

export default IndividualQuestion;