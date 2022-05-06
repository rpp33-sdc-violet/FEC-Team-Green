import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddAnswerDashboard from './AddAnswerDashboard.jsx';
import AnswersList from './AnswersList.jsx';


const IndividualQuestion = (props) => {
  // props: question, product name (pass to AddAnswerDashboard)

  const [answers, setAnswers] = useState([]);
  const [countA, setCountA] = useState(2);
  const [moreAnsButtonVisible, setMoreAnsButtonVisible] = useState(false);
  const [isHelpfulClickedQ, setIsHelpfulClickedQ] = useState(false);
  const [helpfulCountQ, setHelpfulCountQ] = useState(props.question.question_helpfulness);
  const [moreAnsButtonText, setMoreAnsButtonText] = useState('LOAD MORE ANSWERS');
  const [reportText, setReportText] = useState('Report');
  const [isReportClicked, setIsReportClicked] = useState(false);

  // getAllAnswers/useEffect
  useEffect(() => {
    const count = 20; // start with a high number to avoid too many calls to the API
    let page = 1;
    let answers = [];
    let cancel = false;
    let req = {
      params: {
        endpoint: `${props.question.question_id}/answers`,
        count: count,
        page: page
      }
    };
    // inner function that keeps calling until length of data is less than the count
    const getAllAnswers = () => {
      axios.get('/getQA', req)
        .then((response) => {
          if (cancel) {
            return;
          }
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
          console.log('error in get all answers', err);
          alert('ERROR IN getAllAnswers', error);
        });
    };
    // invoke the recursive inner function
    getAllAnswers();

    return () => {
      cancel = true;
    };
  }, [props.question]); // the empty array stops the effect from running more than once

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
      // change button text to allow view of all answers if clicked
      setMoreAnsButtonText('LOAD MORE ANSWERS');
    }
  };

  // handleHelpfulClick - if isHelpfulClicked is false: request to "mark question as helpful" endpoint, isHelpfulClicked to true
  const handleHelpfulClick = (event) => {
    event.preventDefault();
    if (!isHelpfulClickedQ) {
      let req = {
        params: {
          endpoint: `questions/${props.question.question_id}/helpful`
        }
      };
      axios.put('/putQA', req)
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
  const handleReportClick = (event) => {
    event.preventDefault();
    if (!isReportClicked) {
      let req = {
        endpoint: `questions/${props.question.question_id}/report`

      };
      axios.put('/putQA', req)
        .then((response) => {
          setIsReportClicked(true);
          setReportText('Reported');
        })
        .catch((error) => {
          alert('Question Already Reported');
        });
    } else {
      alert('Answer Already Reported');
    }
  };
  return (
    <div className="question">
      <div className="question-row">
        <p className="question-text">Q:&nbsp;&nbsp;{props.question.question_body}</p>
        <aside className="helpfulQ-addAnswerLink">Helpful? <a href='/' onClick={handleHelpfulClick}>Yes</a> ({helpfulCountQ})&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="/" onClick={handleReportClick}>{reportText}</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<AddAnswerDashboard product_name={props.product_name} question_id={props.question.question_id} question_body={props.question.question_body} theme={props.theme} /></aside>
      </div>
      <AnswersList answers={answers.slice(0, countA)} theme={props.theme} />
      <div className="moreAnswers-option">
        {moreAnsButtonVisible ? <button id={`moreAnswers-button-${props.theme}`} onClick={handleMoreAnsClick}>{moreAnsButtonText}</button> : null}
      </div>
    </div>
  );

};

export default IndividualQuestion;