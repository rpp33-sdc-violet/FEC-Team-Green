// AddAQuestionModal
// props
// show

// state
// form contents

// methods
// handle form changes
// handle submit (POST to server)

// render
// modal/form
import React from 'react';

import '../styles/modal.css';

const AddAQuestionModal = ({ handleClose, handleSubmit, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <button className="modal-button-close" type="button" onClick={handleClose}>
          X
        </button>
        {children}
      </section>
    </div>
  );
};

export default AddAQuestionModal;
