import React from 'react';
import ImageThumbnailList from './ImageThumbnailList.jsx';
import ImageNavigator from './ImageNavigator.jsx';
var ImageExpander = (props) => {

  //this component displays the main gallery image
  var scaled = false;
  var onModalClick = (e) => {

    var container = $('#main-image-modal');
    console.log('modal', e);

    if (!scaled) {

      // console.log('height', container);
      $('#main-image-modal').css('cursor', 'zoom-out');

      var image = new Image();
      image.src = props.selectedPhoto.url;
      image.onload = function () {
        var width = image.width;
        var height = image.height;
        let ratio = height / width;
        let percentage = ratio * 100 + '%';

        $('#main-image-modal').mousemove(function(e) {
          let rect = e.target.getBoundingClientRect();
          let xPos = e.clientX;
          let yPos = e.clientY;
          // console.log('ratio', ratio);
          let xPercent = xPos / (container.innerWidth() / 80);
          let yPercent = yPos / ((container.innerWidth() * ratio) / 190);
          container.css('backgroundSize', 250 + '%');
          yPercent > 105 ? yPercent = 105 : '';
          $('#main-image-modal').css('backgroundPosition', xPercent + '% ' + yPercent + '%');
          // backgroundSize: img.naturalWidth + 'px';
          // $('#main-image-modal').css('transform', 'scale(2.5)');
          container.mouseout = (e) => {
            $('#main-image-modal').css('backgroundPosition', 'center');
            container.css('backgroundSize', 'cover');
          };
        });
      };
    } else {
      $('#main-image-modal').unbind();
      $('#main-image-modal').css('cursor', 'zoom-in');
      $('#main-image-modal').css('backgroundPosition', 'center');
      $('#main-image-modal').css('backgroundSize', 'cover');
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

    props.selectedPhoto ? props.modal ? <div style={{backgroundImage: `url(${props.selectedPhoto.url})`}} id='main-image-modal' onClick={onModalClick} ></div> : <img id = 'main-image' src={props.selectedPhoto.url} onClick={onImageClick}></img>
      : <div className ='image-container'>
        ...loading
      </div>

  );

};
export default ImageExpander;

/* props.selectedPhoto ? props.modal ? <div></div> : <img id = { props.modal ? 'main-image-modal' : 'main-image'} src={props.selectedPhoto.url} onClick={props.modal ? onModalClick : onImageClick}></img>
      : <div className ='image-container'>
        ...loading
      </div>*/