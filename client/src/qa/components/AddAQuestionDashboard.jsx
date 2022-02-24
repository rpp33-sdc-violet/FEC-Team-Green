// AddAQuestionDashboard
// state
// show

// methods
// showModal
// hideModal

// render
// button
import React, { useState } from 'react';
import AddAQuestionModal from './AddAQuestionModal.jsx';

const AddAQuestionDashboard = (props) => {
  // props: product_name

  const [show, setShow] = useState(false);
  const [question, setQuestion] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };
  
  const hideModalAndPOST = () => {
    setShow(false);
    // POST 
  };

  return (
    <>
      <AddAQuestionModal show={show} handleClose={hideModal} handleSubmit={hideModalAndPOST}>
        <h1>Ask Your Question</h1>
        <h3>About the {props.product_name}</h3>
        <form className="question-form">
          <label>
            Your Question*
            <textarea maxLength="1000" required value={question} onChange={(e) => setQuestion(e.target.value)}/>
          </label>
          <label>
            What is your nickname?*
            <input type="text" maxLength="60" required placeholder="Example: jackson11!" 
              value={nickname} onChange={(e) => setNickname(e.target.value)} />
            <br />
            For privacy reasons, do not use your full name or email address
          </label>
          <label>
            Your email*
            <input type="email" maxLength="60" required placeholder="Why did you like the product or not?" 
              value={email} onChange={(e) => setEmail(e.target.value)} />
            <br />
            For authentication reasons, you will not be emailed
          </label>
          <button className="modal-button-submit" type="submit">Submit</button>
        </form>
      </AddAQuestionModal>
      <button type="button" onClick={showModal}>ADD A QUESTION +</button>
    </>

  );
};

export default AddAQuestionDashboard;