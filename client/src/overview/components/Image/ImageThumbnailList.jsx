import React from 'react';
import ImageThumbnail from './ImageThumbnail.jsx';
import $ from 'jquery';

const ImageThumbnailList = (props) => {

  //props

  // props.thumnailUrlList = list of  thumbnail urls
  // props.urlList = list of urls
  // local state highlighted url index
  //method to change highlighted url

  var startScroll = (direction, e ) => {

    var nav = direction === 'down' ? 4 : -4;
    var list = $(`#${props.id}`);

    list.scroll(function(e) {
      //makes scrollbars move up or down and hides the arrows when approrpiate
      list.scrollTop(list.scrollTop() + nav);
      list.scrollTop() === 0 ? $('.upArrow').css('opacity', 0) : $('.upArrow').css('opacity', 1);
      var maxHeight = list[0].scrollHeight - list.outerHeight();
      // console.log('maxHeight', maxHeight, ' scrollTop ',list.scrollTop());
      list.scrollTop() >= maxHeight ? $('.downArrow').css('opacity', 0) : $('.downArrow').css('opacity', 1);
    });
    list.trigger('scroll');

  };
  //stops the scrolling action
  var stopScroll = () => {
    var list = $(`#${props.id}`);
    list.unbind();
  };



  var photoThumbnails = [];
  if (props.photos) {
    photoThumbnails = props.photos.map ((photo, index) => {
      photo.index = index;
      return <ImageThumbnail photo={photo} key ={index} setSelectedPhoto={props.setSelectedPhoto} alternateClass ={props.alternateClass} selectedPhoto={props.selectedPhoto}/>;
    });
  }

  return (

    <div className='img-thumbnail-panel' id={`${props.id}-panel`}>
      <img className='upArrow' src='https://kidshealth.org/images/mothership/navigation/mott-uparrow.svg' alt='SVG downward arrow' onMouseDown={()=> { startScroll('up'); }} onMouseUp={stopScroll}></img>
      <ul className ='img-thumbnail-list' id={props.id}>
        {photoThumbnails}
      </ul>
      <img className='downArrow' src='https://kidshealth.org/images/mothership/navigation/mott-downarrow.svg' alt="SVG upward arrow" onMouseDown={()=> { startScroll('down'); }} onMouseUp={stopScroll} ></img>
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