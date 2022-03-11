import React, { useState } from 'react';
import Modal from '../../utils/Modal.jsx';
import axios from 'axios';

const AddAQuestionDashboard = (props) => {
  // props: product_name, product_id
  const [show, setShow] = useState(false);
  const [question, setQuestion] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [postErrorMsg, setPostErrorMsg] = useState('');

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var errors = [];
    // check if mandatory fields are empty
    if (question === '') {
      errors.push('your question');
    }

    if (nickname === '') {
      errors.push('your nickname');
    }

    if (email === '') {
      errors.push('your email');
    } else {
      // check for corret email format
      let isCorrectEmail = true;
      const atSplit = email.split('@');

      if (atSplit.length !== 2) {
        isCorrectEmail = false;
      } else {
        const dotSplit = atSplit[1].split('.');
        if (dotSplit.length !== 2) {
          isCorrectEmail = false;
        }
      }

      if (!isCorrectEmail) {
        errors.push('a valid email address format');
      }
    }

    // if there are errors, create errorText and update errorMsg 
    if (errors.length > 0) {
      let errorText = '';

      // proper grammar for lists
      if (errors.length === 1) {
        errorText = `${errors[0]}.`;
      } else if (errors.length === 2) {
        errorText = `${errors[0]} and ${errors[1]}.`;
      } else {
        for (let i = 0; i < errors.length; i++) {
          // if on the last element
          if (i === errors.length - 1) {
            errorText += `and ${errors[i]}.`;
          } else {
            errorText += `${errors[i]}, `;
          }
        }
      }

      setErrorMsg(errorText);
    } else {
      // submission form has been validated succesfully! 
      const bodyParams = {
        body: question,
        name: nickname,
        email: email,
        // eslint-disable-next-line camelcase
        product_id: props.product_id
      };
      axios.post('/api/qa/questions', bodyParams)
        .then((response) => {
          setShow(false);
        })
        .catch((error) => {
          setPostErrorMsg('error in submitting your question - please try again later');
        });
    }
  };

  return (
    <>
      <Modal show={show} handleClose={hideModal}>
        <h1>Ask Your Question</h1>
        <h2>About the <span className="modal-subtitle">{props.product_name}</span></h2>
        {errorMsg === '' || <p className="modal-error-msg">*You must enter the following: {errorMsg}</p>}
        {postErrorMsg === '' || <p className="modal-error-msg">{postErrorMsg}</p>}
        <form className="question-form" onSubmit={handleSubmit}>
          <label>
            Your Question*
            <br></br>
            <textarea maxLength="1000" value={question} onChange={(e) => setQuestion(e.target.value)} />
          </label>
          <label>
            What is your nickname?*
            <br></br>
            <input type="text" maxLength="60" placeholder="Example: jackson11!"
              value={nickname} onChange={(e) => setNickname(e.target.value)} />
            <p className="form-extra-info">For privacy reasons, do not use your full name or email address</p>
          </label>
          <label>
            Your email*
            <br></br>
            <input type="text" maxLength="60" placeholder="Example: sample@email.com"
              value={email} onChange={(e) => setEmail(e.target.value)} />
            <p className="form-extra-info">For authentication reasons, you will not be emailed</p>
          </label>
          <input className="modal-button-submit" type="submit" value="Submit" onClick={(e) => e.stopPropagation()} />
        </form>
      </Modal>
      <button id="addQuestion-button" type="button" onClick={showModal}>ADD A QUESTION +</button>
    </>
  );
};

export default AddAQuestionDashboard;