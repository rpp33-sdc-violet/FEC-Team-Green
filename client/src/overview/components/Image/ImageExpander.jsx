import React from 'react';

var ImageExpander = function (props) {

  //props props.toggleSize;

  console.log('img expander: ', props);
  if (props.selectedStyle && props.selectedStyle.name) {
    return (
      <div className ='image-container'>
        <img className='main-image' src={props.selectedStyle.photos[0].url}></img>
      </div>
    );
  } else {
    return (
      <div className ='expander'>
        ImageExpander
      </div>
    );
  }
};

export default ImageExpander;