import React from 'react';
import ImageThumbnailList from './ImageThumbnailList.jsx';
var ImageExpander = (props) => {

  //this component displays the main gallery image

  return (
    props.selectedPhoto ? <img className='main-image' src={props.selectedPhoto.url}></img>
      : <div className ='image-container'>
      ...loading
      </div>

  );

};
export default ImageExpander;