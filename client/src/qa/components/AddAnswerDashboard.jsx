import React, { useState } from 'react';
import Modal from './Modal.jsx';
import axios from 'axios';

const AddAnswerDashboard = (props) => {
  // props: product_name, question_body, question_id
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  const handleClick = (event) => {
    event.preventDefault();
    console.log('add answer link clicked');
  };


  return (
    <>
      <Modal show={show} handleClose={hideModal}>
        <p>TEST</p>
      </Modal>
      <a href='#' onClick={showModal}>Add Answer</a>
    </>
  );
};

export default AddAnswerDashboard;