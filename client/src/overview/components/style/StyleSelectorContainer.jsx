import React, { useState } from 'react';
import StyleList from './StyleList.jsx';

//this is the container for all parts of the style functionality
const StyleSelectorContainer = (props) => {

  //props
  //styleList;
  //setSelectedImageUrl
  //setSelectedThumbnailUrl

  // console.log('props', props.productStyles);
  // console.log('img', props.productStyles[0].photos[0].thumbnail_url );
  // var styleList = props.productStyles.map(style => {
  //   return [style.photos[0].thumbnail_url, style.style_id];
  // });
  // console.log('list', {styleList});
  if (props.productStyles && props.productStyles.length > 1) {
    return (
      <div>
        <div className='style-tag'> STYLE {'>'}  {props.selectedStyle.name}</div>
        <div className='style-selector panel'>

          <StyleList styleList={props.productStyles} setSelectedStyle={props.setSelectedStyle}/>
          <div>
          StyleSelectorContainer
          </div>
          {/* <img> src={props.productStyles[0].photos[0].thumbnail_url}</img> */}
        </div>
      </div>
    );
  } else {
    return (

      <div className='style-selector panel'>
        {list}
        <h5 className='style-tag ghost'>...loading</h5>
        <img className='style-thumbnail' src={props.productStyles[0].photos[0].thumbnail_url}></img>
        <img className='style-thumbnail' src={props.productStyles[1].photos[0].thumbnail_url}></img>
        <img className='style-thumbnail' src={props.productStyles[2].photos[0].thumbnail_url}></img>
        <div>
          StyleSelectorContainer
        </div>
      </div>
    );
  }
};

export default StyleSelectorContainer;

//displays the selected style
// a list of styles to select from
// the selcted style will also have a checkmark on it
// the styles will be displayed in a list
