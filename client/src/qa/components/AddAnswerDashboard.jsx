import React from 'react';
import Modal from './Modal.jsx';
import axios from 'axios';

const AddAnswerDashboard = (props) => {
  // props: product_name, question_body, question_id
  // state
  // show
  // state: AddAnswerLinkClick?

  // methods
  // showModal
  // hideModal

  const handleClick = (event) => {
    event.preventDefault();
    console.log('add answer link clicked');
  };
  

  // render
  // link
  return (
    <a href='#' onClick={handleClick}>Add Answer</a>
  );
};

export default AddAnswerDashboard;