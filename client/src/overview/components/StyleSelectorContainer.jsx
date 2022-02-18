import React, { useState } from 'react';
import StyleList from './StyleList.jsx';

//this is the container for all parts of the style functionality
const StyleSelectorContainer = (props) => {

  //props
  //styleList;
  //setSelectedImageUrl
  //setSelectedThumbnailUrl



  if (props.productStyles.length > 1) {
    return (
      <div className='style-selector panel'>
        <h5 className='style-tag'> {props.productStyles[0].name}</h5>

        <div>
          StyleSelectorContainer
        </div>
      </div>
    );
  } else {
    return <div>...loading</div>;
  }
};

export default StyleSelectorContainer;

//displays the selected style
// a list of styles to select from
// the selcted style will also have a checkmark on it
// the styles will be displayed in a list
