import React from 'react';

import './styles/modal.css';

const Modal = ({ handleClose, show, children, theme }) => {
  const showHideClassName = show ? `modal-${theme} display-block` : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className={`modal-main-${theme}`}>
        <button className="modal-button-close" type="button" onClick={handleClose}>
          X
        </button>
        {children}
      </section>
    </div>
  );
};

export default Modal;
