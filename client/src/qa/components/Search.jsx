import React, { useState, useEffect } from 'react';

const Search = (props) => {
  // props
  // userSearch function from QA

  // methods
  // handleChange (sends value to QA's userSearch)
  const handleChange = (event) => {
    props.userSearch(event.target.value);
  };

  return (
    <form role="search">
      <div>
        <input type="search" id="question-search" name="q"
          placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
          aria-label="Search questions" onChange={handleChange}>
        </input>
      </div>
    </form>
  );
};

export default Search;
