import React, { useState } from 'react';
import StyleList from './StyleList.jsx';

//this is the container for all parts of the style functionality
const StyleSelectorContainer = (props) => {

  //props
  //styleList;
  //setSelectedImageUrl
  //setSelectedThumbnailUrl

  // console.log('props', props.productStyles);
  // var list = props.productStyles.map(style => {
  //   return <img src={style.photos[0].thumbnail_url}></img>;
  // });
  // console.log('list', {list});
  if (props.productStyle && props.productStyles.length > 1) {
    return (
      <div className='style-selector panel'>
        <h5 className='style-tag'> {props.selectedStyle[0].name}</h5>
        {/* {list} */}
        <div>
          StyleSelectorContainer
        </div>
      </div>
    );
  } else {
    return (
      <div className='style-selector panel'>
        <h5 className='style-tag ghost'>...loading</h5>

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
