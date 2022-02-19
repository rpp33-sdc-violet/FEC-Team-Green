import React from 'react';
import ImageExpander from './ImageExpander.jsx';
var ImageContainer = function (props) {

  //props props.toggleSize;


  return (
    <div className ='image-container'>
      ImageContainer
      <ImageExpander selectedStyle={props.selectedStyle}/>
    </div>
  );
};

export default ImageContainer;