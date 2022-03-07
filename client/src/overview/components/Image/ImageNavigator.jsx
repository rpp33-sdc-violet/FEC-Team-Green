import React from 'react';
import {MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft} from 'react-icons/md';
var ImageNavigator = function (props) {

  //props props.imageNav;

  var startScroll = (direction, e ) => {
    var nav = direction === 'down' ? 2 : -2;
    var list = $('.img-thumbnail-list');
    list.scroll(function(e) {
      list.scrollTop(list.scrollTop() + nav);
      $('.img-thumbnail-list').scrollTop() === 0 ? $('.upArrow').css('opacity', 0) : $('.upArrow').css('opacity', 1);
      var maxHeight = list[0].scrollHeight - list.outerHeight();
      $('.img-thumbnail-list').scrollTop() === maxHeight ? $('.downArrow').css('opacity', 0) : $('.downArrow').css('opacity', 1);
    });
    list.trigger('scroll');

  };
  var stopScroll = () => {
    $('.img-thumbnail-list').unbind();
  };


  var isScrolledIntoView = function() {
    var el = $('li .img-thumbnail.selected')[0];
    var list = $('.img-thumbnail-list');
    var minTop = list[0].getBoundingClientRect();
    var rect = el.getBoundingClientRect();
    console.log('rect', rect.bottom);
    console.log('rect', el.y);
    console.log('minTop ', minTop );
    console.log('current section', list.scrollTop(), ' to ', list.scrollTop() + list.outerHeight() );
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    console.log(`bottom ${elemBottom} - scrolltop${list.scrollTop()} - (.5 * ${rect.height}) >= minTop.top${minTop.top}`, elemBottom - list.scrollTop() - (.5 * rect.height) >= minTop.top);
    // Only completely visible elements return true:
    var isVisible = true;
    //&& elemBottom - list.scrollTop() - (.5 * rect.height) >= minTop.top);
    isVisible = (rect.bottom - 9 <= list.outerHeight() + list.scrollTop());

    console.log(`bottom ${rect.bottom - 9} <= outerHeight ${list.outerHeight()} + scrolltopHeight ${list.scrollTop()}`, isVisible);

    //check if the we need to scroll down
    if (!(rect.bottom - 9 <= list.outerHeight() + list.scrollTop())) {
      return 1;
    } else if (! (elemBottom - list.scrollTop() - (.5 * rect.height) >= minTop.top)) {
      return -1;
    } else {
      return 0;
    }


    // return isVisible;
  };




  // hide arrows if they are at the edge of the list of photos
  if (props.direction === 'right') {
    // console.log('props.direction', props.direction, props.selectedPhoto.index, 'max', props.photos.length);
    if (props.selectedPhoto.index >= props.photos.length - 1 ) {
      $(`.${props.direction}Arrow`).hide();
    } else {
      $(`.${props.direction}Arrow`).show();
    }
  } else if (props.direction === 'left') {
    if (props.selectedPhoto.index === 0 ) {
      $(`.${props.direction}Arrow`).hide();
    } else {
      $(`.${props.direction}Arrow`).show();
    }
  }
  return (
    props.direction === 'right' ?
      <MdOutlineKeyboardArrowRight className={`${props.direction}Arrow`} id={props.id} onClick={()=> {
        var nextPhoto = props.selectedPhoto.index + 1;
        props.setSelectedPhoto(props.photos[nextPhoto]);
        console.log(isScrolledIntoView());
      }}></MdOutlineKeyboardArrowRight> :
      <MdOutlineKeyboardArrowLeft className={`${props.direction}Arrow`}id={props.id} onClick={()=> {
        var nextPhoto = props.selectedPhoto.index - 1;
        props.setSelectedPhoto(props.photos[nextPhoto]);

        while (isScrolledIntoView() > 0) {
          startScroll('down');
        } stopScroll();
        while (isScrolledIntoView() < 0) {
          startScroll('up');
        } stopScroll();

        // console.log(isScrolledIntoView());
      }}></MdOutlineKeyboardArrowLeft>
  );
};

export default ImageNavigator;

//does clicking the right side take you to a new image?
//does clicking the left side take you to a previous image
// does the right arrow dissappear if you reach the end of the list
// does the left arrow dissappear if you reach the beginning of the list
//