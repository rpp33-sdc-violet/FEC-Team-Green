import React, {useState, useEffect} from 'react';
import {MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft} from 'react-icons/md';
import $ from 'jquery';
// this component provides the forward and backwards arrows and the autoscroll functionality
var ImageNavigator = function (props) {

  const [rightArrowVisibility, setRightArrowVisibility] = useState(true);
  const [leftArrowVisibility, setLeftArrowVisibility] = useState(false);


  var startScroll = (direction, e ) => {
    // nav controlls the scroll speed
    var nav = direction === 'down' ? 2 : -2;
    var list = $('.img-thumbnail-list');

    list.scroll(function(e) {
      list.scrollTop(list.scrollTop() + nav);
      // $('.img-thumbnail-list').scrollTop() === 0 ? $('.upArrow').css('opacity', 0) : $('.upArrow').css('opacity', 1);
      // scrollTop = 0 ? setupArrowVisibility(false) : setupArrowVisibility(true);

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
    // console.log('rect', rect.bottom);
    // console.log('rect', el.y);
    // console.log('minTop ', minTop );
    // console.log('current section', list.scrollTop(), ' to ', list.scrollTop() + list.outerHeight() );
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // console.log(`bottom ${elemBottom} - scrolltop${list.scrollTop()} - (.5 * ${rect.height}) >= minTop.top${minTop.top}`, elemBottom - list.scrollTop() - (.5 * rect.height) >= minTop.top);
    // Only completely visible elements return true:
    var isVisible = true;
    //&& elemBottom - list.scrollTop() - (.5 * rect.height) >= minTop.top);
    isVisible = (rect.bottom - 9 <= list.outerHeight() + list.scrollTop());

    // console.log(`bottom ${rect.bottom - 9} <= outerHeight ${list.outerHeight()} + scrolltopHeight ${list.scrollTop()}`, isVisible);

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
  useEffect(()=> {
    if (props.direction === 'right') {
      props.selectedPhoto.index >= props.photos.length - 1 ?
        setRightArrowVisibility(false) :
        setRightArrowVisibility(true);
    }
    if (props.direction === 'left') {
      props.selectedPhoto.index === 0 ?
        setLeftArrowVisibility(false) :
        setLeftArrowVisibility(true);
    }
  });


  return (
    props.direction === 'right' ?
      <MdOutlineKeyboardArrowRight
        style={{display: rightArrowVisibility ? 'block' : 'none' }}
        id={`${props.direction}Arrow`}
        onClick={()=> {
          var nextPhoto = props.selectedPhoto.index + 1;
          props.setSelectedPhoto(props.photos[nextPhoto]);
        }}></MdOutlineKeyboardArrowRight> :
      <MdOutlineKeyboardArrowLeft
        style={{display: leftArrowVisibility ? 'block' : 'none' }}
        id={`${props.direction}Arrow`}
        onClick={()=> {
          var nextPhoto = props.selectedPhoto.index - 1;
          props.setSelectedPhoto(props.photos[nextPhoto]);

          // while (isScrolledIntoView() > 0) {
          //   startScroll('down');
          // } stopScroll();
          // while (isScrolledIntoView() < 0) {
          //   startScroll('up');
          // } stopScroll();

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