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
    const splitT = props.answer.date.split('T');
    const dateOnly = splitT[0];
    const splitDate = dateOnly.split('-');
    const year = splitDate[0];
    const day = splitDate[2];
    // get the name of the month 
    const monthNum = Number(splitDate[1]);
    const monthsArr = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = monthsArr[monthNum];
    
    return `${month} ${day}, ${year}`;
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