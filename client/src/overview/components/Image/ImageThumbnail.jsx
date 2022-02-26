import React from 'react';

const ImageThumbnail = (props) => {

  //props

  // props.thumnail_url = thumbnail url
  // props.url = main image url
  // console.log('props ', props);
  props.thumbnail_url;

  return (

    <li>
      {props.photo.thumbnail_url ? <img src={props.photo.thumbnail_url} className ='img-thumbnail' onClick={(e)=>{
        console.log('clicked', props.photo);
        props.setSelectedPhoto(props.photo.url);


      }}></img> : 'image'}
    </li>
  );
};

export default ImageThumbnail;

//Test Clicking on any thumbnail should update the main image to match that shown in the thumbnail clicked.
//Test does clicking the thumbnail bring that thumbnail to the top of the list (Highlight it).
//is the Thumbnail part of a ImgThumbnailList
//test Clicking on the currently selected thumbnail will have no further effect.
