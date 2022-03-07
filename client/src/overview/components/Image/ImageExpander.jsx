import React from 'react';
import ImageThumbnailList from './ImageThumbnailList.jsx';
import ImageNavigator from './ImageNavigator.jsx';
var ImageExpander = (props) => {

  //this component displays the main gallery image
  var scaled = false;
  var onModalClick = (e) => {
    console.log('modal', e);

    if (!scaled) {
      $('#main-image-modal').css('transform', 'translate(100px, 10px) scale(2.5)');
      $('#main-image-modal').css('cursor', 'zoom-out');
      $('#main-image-modal').mousemove(function(e) {
        $('#main-image-modal').css('transform', `translate(${e.clientX}px, ${e.clientY}px) scale(2.5)`);
      });
    } else {
      $('#main-image-modal').css('transform', 'scale(1)');
      $('#main-image-modal').unbind();
      $('#main-image-modal').css('cursor', 'zoom-in');
    }

    scaled = !scaled;
  };

  var onImageClick = (e) => {
    var imageModal = $('#image-modal-frame');
    var wrapperWidth = $('.overview-wrapper').width();
    var wrapperHeight = $('.overview-wrapper').height();
    console.log('img width', wrapperWidth);

    imageModal.css('width', `${wrapperWidth * .95}px`);
    imageModal.css('height', `${wrapperHeight * .95}px`);
    imageModal.toggle();
  };
  return (
  // <React-Fragment>

    props.selectedPhoto ? <img id = { props.modal ? 'main-image-modal' : 'main-image'} src={props.selectedPhoto.url} onClick={props.modal ? onModalClick : onImageClick}></img>
      : <div className ='image-container'>
        ...loading
      </div>
  // <ImageNavigator></ImageNavigator>
  // {/* </React-Fragment> */}

  );

};
export default ImageExpander;