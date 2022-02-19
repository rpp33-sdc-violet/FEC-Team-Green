import React from 'react';

var ImageThumbnail = function (props) {

  //props

  // props.thumnail_url = thumbnail url
  // props.url = main image url



  return (
    <div className ='img-thumbnail'>
      ImageThumbnail
    </div>
  );
};

export default ImageThumbnail;

//Test Clicking on any thumbnail should update the main image to match that shown in the thumbnail clicked.
//Test does clicking the thumbnail bring that thumbnail to the top of the list (Highlight it).
//is the Thumbnail part of a ImgThumbnailList
//test Clicking on the currently selected thumbnail will have no further effect.
