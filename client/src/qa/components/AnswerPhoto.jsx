import React, { useState } from 'react';
import Modal from '../../utils/Modal.jsx';

const AnswerPhoto = (props) => {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  return (
    <>
      <Modal show={show} handleClose={hideModal}>
        <img className="answer-photo"
          src={props.url}
          alt={`photo upload by ${props.answerer_name}`} />
      </Modal>
      <img className="answer-photo-thumbnail"
        src={props.url}
        alt={`photo upload by ${props.answerer_name}`}
        onClick={showModal} />
    </>
  );
};

export default AnswerPhoto;