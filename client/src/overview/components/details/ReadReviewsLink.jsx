import React, {useState} from 'react';
import $ from 'jquery';

var scroll = function() {
  $('#answer-letter')[0].scrollIntoView();
};

const ReadReviewsLink = (props)=> {

  return (
    <a onClick={scroll}id='read-reviews' href="#answer-letter">Read All Reviews</a>
  );
};

export default ReadReviewsLink;