import React, { useState, useEffect } from 'react';
import axios from 'axios';

const IndividualAnswer = (props) => { 
  // props
  // answer (from AnswersList)

  const [isHelpfulClickedA, setIsHelpfulClickedA] = useState(false); 
  const [helpfulCountA, setHelpfulCountA] = useState(props.answer.helpfulness);  

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

  // *****TODO: handleReportClick - request to "report answer" endpoint

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
  
  // render
  // A text and *****TODO: photos?*******
  // *****TODO: Report Link
  return (
    <div className="answer">
      <p className="answer-text"><strong>A: </strong>{props.answer.body}</p>
      <p>by {props.answer.answerer_name}, {formatDate()} | Helpful? <a href='/' onClick={handleHelpfulClick}>Yes </a>({helpfulCountA}) | placeholder: Report</p>
    </div>
  );

};

export default IndividualAnswer;