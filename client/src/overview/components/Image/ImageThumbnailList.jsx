import React from 'react';
import ImageThumbnail from './ImageThumbnail.jsx';


const ImageThumbnailList = (props) => {

  //props

  // props.thumnailUrlList = list of  thumbnail urls
  // props.urlList = list of urls
  // local state highlighted url index
  //method to change highlighted url
  var stopScroll = () => {
    $('.img-thumbnail-list').unbind();
  };
  var scroll = (direction, e ) => {
    if (direction === 'down') {
      var list = $('.img-thumbnail-list');
      console.log('scrolldown ', list);
      // list.scroll();
      list.scroll(function(e) {
        console.log('scrolling', list.scrollTop());
        list.scrollTop(list.scrollTop() + 3);
      });
      list.trigger('scroll');

    } else if (direction === 'up') {

      var list = $('.img-thumbnail-list');
      console.log('scrolldown ', list);
      // list.scroll();
      list.scroll(function(e) {
        console.log('scrolling ^', list.scrollTop());
        list.scrollTop(list.scrollTop() - 3);


      });
      list.trigger('scroll');

    }

  };
  var photoThumbnails = [];
  if (props.photos) {
    photoThumbnails = props.photos.map ((photo, index) => {
      photo.index = index;
      return <ImageThumbnail photo={photo} key ={index} setSelectedPhoto={props.setSelectedPhoto} selectedPhoto={props.selectedPhoto}/>;
    });
  }
  // console.log('photos', photoThumbnails);
  return (

    <div className='img-thumbnail-panel'>
      <img className='upArrow' src='https://kidshealth.org/images/mothership/navigation/mott-uparrow.svg' alt='SVG downward arrow'onMouseDown={()=> { scroll('up', event.target); }} onMouseUp={stopScroll}></img>
      <div className ='img-thumbnail-list'>
        {photoThumbnails}
      </div>
      <img className='downArrow' src='https://kidshealth.org/images/mothership/navigation/mott-downarrow.svg' alt="SVG downward arrow" onMouseDown={()=> { scroll('down', event.target); }} onMouseUp={stopScroll} ></img>
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