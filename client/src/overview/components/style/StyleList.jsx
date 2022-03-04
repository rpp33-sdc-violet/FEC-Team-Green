import React, { useState } from 'react';
import StyleThmbnail from './StyleThumbnail.jsx';

//this is list that contains all thumbnail buttons
const StyleList = (props) => {

  //props
  //StyleListofThumbnails list;
  //setSelectedImageUrl
  //setSelectedListUrl

  var styleThumbnails = props.styleList.map(style => {
    return <StyleThmbnail style={style} key={style.style_id} setSelectedStyle={props.setSelectedStyle} id={style.style_id}/>;
  });
  return (
    <ul className='style-list'>
      { styleThumbnails }
    </ul>

  );
};

export default StyleList;

//displays list in groups of 4
// if clicked with change the selected image
// the selcted style will also have a checkmark on it
//

/*
Test if only four show up in each roaw
Test if the style text changes when a button is clicked
Test the default style is the first style in the list
test only 1 style can be selected at a time
Test if class is style-list
*/