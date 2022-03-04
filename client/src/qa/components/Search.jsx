import React, { useState, useEffect } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';


const Search = (props) => {
  // props
  // userSearch function from QA

  // methods
  // handleChange (sends value to QA's userSearch)
  const handleChange = (event) => {
    props.userSearch(event.target.value);
  };

  return (
    <form role="search" className="search">
      <input type="search" id="question-search" name="q"
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
        aria-label="Search questions" onChange={handleChange}>
      </input>
      <BiSearchAlt2 id="QA-search-icon"/>
    </form>
  );
};

export default Search;
