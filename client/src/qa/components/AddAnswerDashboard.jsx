import React, { useState } from 'react';
import Modal from './Modal.jsx';
import axios from 'axios';

const AddAnswerDashboard = (props) => {
  // props: product_name, question_body, question_id
  const [show, setShow] = useState(false);
  const [answer, setAnswer] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');


  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit clicked');
  };


  return (
    <>
      <Modal show={show} handleClose={hideModal}>
        <h1>Submit Your Answer</h1>
        <h2>{props.product_name}: {props.question_body}</h2>
        <form className="answer-form" onSubmit={handleSubmit}>
          <label>
            Your Answer*
            <textarea maxLength="1000" value={answer} onChange={(e) => setAnswer(e.target.value)} />
          </label>
          <label>
            What is your nickname?*
            <input type="text" maxLength="60" placeholder="Example: jack543!"
              value={nickname} onChange={(e) => setNickname(e.target.value)} />
            <br />
            For privacy reasons, do not use your full name or email address
          </label>
          <label>
            Your email*
            <input type="text" maxLength="60" placeholder="Example: jack@email.com"
              value={email} onChange={(e) => setEmail(e.target.value)} />
            <br />
            For authentication reasons, you will not be emailed
          </label>

          <input className="modal-button-submit" type="submit" value="Submit" />
        </form>
      </Modal>
      <a href='#' onClick={showModal}>Add Answer</a>
    </>
  );
};

export default AddAnswerDashboard;