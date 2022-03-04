import React, { useState } from 'react';
import StyleList from './StyleList.jsx';

//this is the container for all parts of the style functionality
const StyleSelectorContainer = (props) => {

  //props
  //styleList;
  //setSelectedImageUrl
  //setSelectedThumbnailUrl


  //if data has been passed to component, render it here
  if (props.productStyles && props.productStyles.length > 1) {
    return (
      <div>
        <div className='style-tag'> STYLE {'>'}  {props.selectedStyle.name}</div>
        <div className='style-selector panel'>

          <StyleList styleList={props.productStyles} setSelectedStyle={props.setSelectedStyle}/>

          {/* <img> src={props.productStyles[0].photos[0].thumbnail_url}</img> */}
        </div>
      </div>
    ); // if data hasn't loaded, render empty component
  } else {
    return (

      <div className='style-selector panel'>
        {/* //maybe put 8 empty circles */}
        <h5 className='style-tag ghost'>...loading</h5>
        <div>
          StyleSelectorContainer
        </div>
      </div>
    );
  }
};

export default StyleSelectorContainer;

//displays the selected style  check
// a list of styles to select from check
// the selcted style will also have a checkmark on it
// the styles will be displayed in a list check
