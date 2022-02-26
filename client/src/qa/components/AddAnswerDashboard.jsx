import React, { useState, useEffect } from 'react';
import Modal from './Modal.jsx';
import axios from 'axios';
import { Storage } from 'aws-amplify';

const AddAnswerDashboard = (props) => {
  // props: product_name, question_body, question_id
  const [show, setShow] = useState(false);
  const [answer, setAnswer] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  const fetchPhotoURL = (key) => {
    // Get a presigned URL of a stored file
    Storage.get(key)
      .then((response) => {
        // response: returns a signed URL string to your file
        // setPhotos which spreads previous state's array and adds URL to update state
        setPhotos(oldPhotos => [...oldPhotos, response]);
      })
      .catch((error) => {
        // ********** TODO **********
      });
  };
  
  const handlePhotoUpload = function(event) {
    // get just the file info
    const file = event.target.files[0];
    // upload file/photo to S3 bucket using PUT method
    Storage.put(file.name, file)
      .then((response) => {
        // response: {key: S3 Object key}
        fetchPhotoURL(response.key); 
      })
      .catch((error) => {
        // ********** TODO **********
      });
  };
  
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
    if (answer === '') {
      errors.push('your answer');
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
        body: answer,
        name: nickname,
        email: email,
      };
      console.log('bodyParams', bodyParams);
      setShow(false);
    }
  };

  return (
    <>
      <Modal show={show} handleClose={hideModal}>
        <h1>Submit Your Answer</h1>
        <h2>{props.product_name}: {props.question_body}</h2>
        {errorMsg === '' || <p className="modal-error-msg">*You must enter the following: {errorMsg}</p>}
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
          <label>
            Upload your photos
            <input type="file" id="img" name="img" accept="image/*" onChange={handlePhotoUpload} />
            {
              photos.map(photo => (
                <img src={photo} key={photo} />
              ))
            }
          </label>
          <input className="modal-button-submit" type="submit" value="Submit" />
        </form>
      </Modal>
      <a href='#' onClick={showModal}>Add Answer</a>
    </>
  );
};

export default AddAnswerDashboard;