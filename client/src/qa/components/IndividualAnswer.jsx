import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnswerPhotosList from './AnswerPhotosList.jsx';

const IndividualAnswer = (props) => { 
  // props
  // answer (from AnswersList)

  const [isHelpfulClickedA, setIsHelpfulClickedA] = useState(false); 
  const [helpfulCountA, setHelpfulCountA] = useState(props.answer.helpfulness);  
  const [reportText, setReportText] = useState('Report');
  const [isReportClicked, setIsReportClicked] = useState(false);

  // methods
  // handleHelpfulClick - request to "mark answer as helpful" endpoint 
  const handleHelpfulClick = (event) => {
    event.preventDefault();
    if (!isHelpfulClickedA) {
      axios.put(`/api/qa/answers/${props.answer.answer_id}/helpful`)
        .then((response) => {
          setHelpfulCountA(helpfulCountA + 1);
          setIsHelpfulClickedA(true);
        })
        .catch((error) => {
          alert('Answer: Helpful Link Already Clicked!');
        });
    } else {
      alert('Answer: Helpful Link Already Clicked');
    }
  };

  // handleReportClick - request to "report answer" endpoint
  const handleReportClick = (event) => {
    event.preventDefault();
    if (!isReportClicked) {
      axios.put(`api/qa/answers/${props.answer.answer_id}/report`)
        .then((response) => {
          setIsReportClicked(true);
          setReportText('Reported');
        })
        .catch((error) => {
          alert('Answer Already Reported');
        });
    } else {
      alert('Answer Already Reported');
    }
  };

  // date formatter
  const formatDate = () => {
    // implementation credit: Wen 
    // use Date constructor 
    const date = new Date(props.answer.date);
    // access the toLocaleString method to format the date based on BRD requirements
    return date.toLocaleString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };
  
  return (
    <div className="answer" role="answer">
      <p className="answer-text"><span id="answer-letter">A:&nbsp;&nbsp;</span>{props.answer.body}</p>
      <AnswerPhotosList photos={props.answer.photos} answerer_name={props.answer.answerer_name} />
      <footer className="answerData-helpfulA-reportLink">by {props.answer.answerer_name}, {formatDate()}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Helpful? <a href="/" onClick={handleHelpfulClick}>Yes</a> ({helpfulCountA})&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="/" onClick={handleReportClick}>{reportText}</a></footer>
    </div>
  );
};

export default IndividualAnswer;