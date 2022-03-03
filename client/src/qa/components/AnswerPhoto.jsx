import React from 'react';

const AnswerPhoto = (props) => {
  return (
    <img className="answer-photo-thumbnail"
      src={props.url}
      alt={`photo upload by ${props.answerer_name}`}></img>
  );
};

export default AnswerPhoto;