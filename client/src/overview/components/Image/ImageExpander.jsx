import React from 'react';
import ImageThumbnailList from './ImageThumbnailList.jsx';
var ImageExpander = function (props) {

  //props props.toggleSize;

  console.log('img expander: ', props);
  if (props.selectedPhoto) {
    return (

      <img className='main-image' src={props.selectedPhoto}></img>

    );
  } else {
    return (
      <div className ='image-container'>
        ...loading
      </div>
    );
  }
};

export default ImageExpander;