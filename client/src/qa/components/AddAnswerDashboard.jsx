import React from 'react';

const AddAnswerDashboard = () => {
  //   state
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