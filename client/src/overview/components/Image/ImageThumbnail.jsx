import React from 'react';
import {MdOutlinePhoto} from 'react-icons/md';
const ImageThumbnail = (props) => {
// onerror='this.style.display = "none"'>
  // this component displays individual thumbnails -it adds a class to the currently selected thumbnail
  // console.log($('img-thumbnail.selected').is(':hidden'));
  // console.log($('.img-thumbnail.selected'));
  return (
    <li>
      {props.photo.thumbnail_url ? <img src={props.photo.thumbnail_url} className = {props.selectedPhoto && props.selectedPhoto.index === props.photo.index ? `img-thumbnail ${props.alternateClass} selected` : `img-thumbnail ${props.alternateClass}`} onClick={(e)=>{
        props.setSelectedPhoto(props.photo);
      }} alt='image thumbnail' onError='this.style.display = "none"'></img> : 'image'}
    </li>
  );
};

export default ImageThumbnail;

//Test Clicking on any thumbnail should update the main image to match that shown in the thumbnail clicked.
//Test does clicking the thumbnail bring that thumbnail to the top of the list (Highlight it).
//is the Thumbnail part of a ImgThumbnailList
//test Clicking on the currently selected thumbnail will have no further effect.
