import React, {useState, useEffect} from 'react';
import ImageThumbnail from './ImageThumbnail.jsx';
import $ from 'jquery';

const ImageThumbnailList = (props) => {

  const [upArrowVisibility, setUpArrowVisibility] = useState(false);
  const [downArrowVisibility, setDownArrowVisibility] = useState(true);
  // const [maxHeight2, setMaxHeight2] = useState(12);
  //props

  // props.thumnailUrlList = list of  thumbnail urls
  // props.urlList = list of urls
  // local state highlighted url index
  //method to change highlighted url

  useEffect(() => {

    if (props.photos.length < 7 ) {
      setDownArrowVisibility(false);
    }
  });

  var startScroll = (direction, e ) => {

    var nav = direction === 'down' ? 4 : -4;
    var list = $(`#${props.id}`);
    const scroller = document.querySelector(`#${props.id}`);


    var maxHeight = props.photos.length * 76.5 > 535 ? props.photos.length * 76.5 - 535 : 0;

    list.scroll(function(e) {
      //makes scrollbars move up or down and hides the arrows when approrpiate

      scroller.scrollTop = scroller.scrollTop + nav;
      var newScrollTop = scroller.scrollTop;
      // console.log('scroller', newScrollTop, 'maxHeight', maxHeight);

      // control upArrow visibility
      newScrollTop === 0 ? setUpArrowVisibility(false) : setUpArrowVisibility(true);
      // control upArrow visibility
      newScrollTop >= maxHeight ? setDownArrowVisibility(false) : setDownArrowVisibility(true);

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
  //  <img className={`upArrow${upArrowVisibility ? '' : '-invisible'}`}
    <div className='img-thumbnail-panel' id={`${props.id}-panel`}>
      <img
        id='upArrowMainGallery'
        className={upArrowVisibility ? 'visible' : 'invisible'} src='https://kidshealth.org/images/mothership/navigation/mott-uparrow.svg' alt='SVG downward arrow' onMouseDown={()=> { startScroll('up'); }} onMouseUp={stopScroll}></img>
      <ul className ='img-thumbnail-list' id={props.id}>
        {photoThumbnails}
      </ul>
      <img
        id='downArrowMainGallery'
        className={downArrowVisibility ? 'visible' : 'invisible'} src='https://kidshealth.org/images/mothership/navigation/mott-downarrow.svg'
        alt="SVG upward arrow"
        onMouseDown={()=> { startScroll('down'); }}
        onMouseUp={stopScroll} ></img>
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
