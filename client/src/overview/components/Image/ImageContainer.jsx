import React from 'react';
import ImageExpander from './ImageExpander.jsx';
var ImageContainer = function (props) {

  //props props.toggleSize;


  return (

    <ImageExpander selectedStyle={props.selectedStyle}/>

  );
};

export default ImageContainer;