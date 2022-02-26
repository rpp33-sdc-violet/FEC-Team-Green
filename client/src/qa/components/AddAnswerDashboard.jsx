import React, { useState, useEffect } from 'react';
import Modal from './Modal.jsx';
import axios from 'axios';

const AddAnswerDashboard = (props) => {
  // props: product_name, question_body, question_id
  const [show, setShow] = useState(false);
  const [answer, setAnswer] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const [canUpload, setCanUpload] = useState(true);
  const [photoErrorMsg, setPhotoErrorMsg] = useState('');
  const [postErrorMsg, setPostErrorMsg] = useState('');

  // useEffect(() => {
  //   if (photos.length >= 5) {
  //     setCanUpload(false);
  //   }
  // });

  const fetchPhotoURL = (key) => {
    // Get a presigned URL of a stored file

    // setPhotos(oldPhotos => [...oldPhotos, response]);

    // setPhotoErrorMsg('photo unable to be uploaded');

  };

  const handlePhotoUpload = function (event) {
    // get just the file info
    const file = event.target.files[0];
    // upload file/photo to S3 bucket using PUT method

    // get secure url from server
    axios.get('/s3Url')
      .then((response) => {
        const url = response.data.response;
        console.log('S3URL', url);

        fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          body: file
        })
          .then((response) => {
            console.log('response after FETCH,', response);
          })
          .catch((error) => {
            console.log('ERROR after FETCH,', error);
          });



      });

    // post image directly to S3 bucket

    // post request to my server to store data

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
        photos: photos
      };

      console.log('bodyParams', bodyParams);
      console.log('questionId', props.question_id);
      axios.post(`/api/qa/questions/${props.question_id}/answers`, bodyParams)
        .then((response) => {
          setShow(false);
        })
        .catch((error) => {
          setPostErrorMsg('error in submitting your answer - please try again later');
        });
    }
  };

  return (
    <>
      <Modal show={show} handleClose={hideModal}>
        <h1>Submit Your Answer</h1>
        <h2>{props.product_name}: {props.question_body}</h2>
        {errorMsg === '' || <p className="modal-error-msg">*You must enter the following: {errorMsg}</p>}
        {postErrorMsg === '' || <p className="modal-error-msg">{postErrorMsg}</p>}
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
            {!canUpload || <input type="file" id="img" name="img" accept="image/*" onChange={handlePhotoUpload} />}
            {photoErrorMsg === '' || <p className="modal-error-msg">*You must enter the following: {photoErrorMsg}</p>}
            <div className="add-answer-uploads-container">
              {
                photos.map(photo => (
                  <img src={photo} key={photo} className="add-answer-photo" />
                ))
              }
            </div>
          </label>
          <input className="modal-button-submit" type="submit" value="Submit" />
        </form>
      </Modal>
      <a href='#' onClick={showModal}>Add Answer</a>
    </>
  );
};

export default AddAnswerDashboard;