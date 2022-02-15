import React from 'react';

var ImageThumbnailList = function (props) {

  //props

  // props.thumnailUrlList = list of  thumbnail urls
  // props.urlList = list of urls
  // local state highlighted url index
  //method to change highlighted url




  return (
    <div>
      {/* button */}
      <div className='upArrow'> upArrow </div>

      <div className='img-thumbnail-list'>
        ImageThumbnailList
      </div>
      {/* button */}
      <div className='downArrow'> downArrow </div>
    </div>

  );
};

export default ImageThumbnailList;

/*
  Test is the first image in the set displayed?
  Test does the thumbnail match the image that is displayed
  Test When switching between styles, does the index of the image currently selected should be maintained when the gallery updates for the new style.
  Test when more than 7 images are set for a selected style does ImageThumbNav appear.
  Test can user scroll upwards and downwards between images
  test does the main thumbnail update when the user navigates to new main image
  Test If upon navigating to the previous or next image using the arrows, the thumbnail corresponding to the now selected image is no longer visible, then the thumbnail list should scroll similarly such that the newly selected thumbnail is visible.


*/