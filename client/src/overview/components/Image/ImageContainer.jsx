import React, {useState, useEffect} from 'react';
import ImageExpander from './ImageExpander.jsx';
import ImageThumbnailList from './ImageThumbnailList.jsx';
import ImageThumbnail from './ImageThumbnail.jsx';
import { AiOutlineExpand } from 'react-icons/ai';
import ImageNavigator from './ImageNavigator.jsx';
import $ from 'jquery';

var ImageContainer = (props) => {

  // this state helps keep track of the current style and current picture for the gallery
  const [selectedPhoto, setSelectedPhoto] = useState('loading');
  const [currentStyleId, setCurrentStyleId] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  var expandImage = () => {

    var imageModal = $('#image-modal-frame');
    // var wrapperWidth = $('.overview-wrapper').width();
    var wrapperHeight = $('.overview-wrapper').height();
    imageModal.css('width', `${width}px`);
    imageModal.css('height', `${props.height}px`);
    var image = $('#main-image-modal');
    image.css('width', 'auto');
    image.css('height', `${wrapperHeight - 50}px`);
    imageModal.toggle();



  };
  // set state ONLY if it has never been set before or the style changes
  useEffect(()=> {

    if ( props.selectedStyle.photos && (selectedPhoto === 'loading' || currentStyleId !== props.selectedStyle['style_id'] )) {
      // console.log('selected', selectedPhoto, selectedPhoto.index);
      var selected = props.selectedStyle.photos[selectedPhoto.index ? selectedPhoto.index : 0];
      selected ? selected.index = 0 : selected = props.selectedStyle.photos[0];
      selected.index = 0;
      setSelectedPhoto(
        selected);
      setCurrentStyleId( props.selectedStyle.style_id);
    }
  });
  useEffect(() => {
    /* Inside of a "useEffect" hook add an event listener that updates
       the "width" state variable when the window size changes */
    window.addEventListener('resize', () =>{
      setWidth(window.innerWidth);
      // setHeight(document.querySelector('.overview-wrapper').offsetHeight);
      return () => window.removeEventListener('resize', handleWindowResize);
    });

    /* passing an empty array as the dependencies of the effect will cause this
       effect to only run when the component mounts, and not each time it updates.
       We only want the listener to be added once */
  });
  //  this component has 2 parts.  it probably should have been broken into to components
  //
  return (
    <div className ='image-container'>
      <div id='image-modal-frame' style={{width: `${width}px`}, props.theme === 'dark-theme' ? {background: '#121212' } : {background: 'white' } }>
        <ImageNavigator
          setSelectedPhoto={setSelectedPhoto}
          selectedPhoto={selectedPhoto}
          photos={props.selectedStyle.photos}
          direction='right'
          id='rightExpanded'></ImageNavigator>
        <ImageExpander
          selectedPhoto={selectedPhoto}
          modal={true}
          width={width}
          setWidth={setWidth}
          height={height}
          setHeight={setHeight}/>
        <ImageNavigator
          setSelectedPhoto={setSelectedPhoto}
          selectedPhoto={selectedPhoto}
          photos={props.selectedStyle.photos}
          direction='left'
          id='leftExpanded'></ImageNavigator>
        <AiOutlineExpand id='expander-btn' onClick={expandImage}></AiOutlineExpand>
        <ImageThumbnailList
          id='miniCarousel'
          alternateClass={'img-icons'}
          selectedPhoto={selectedPhoto}
          photos={props.selectedStyle.photos}
          setSelectedPhoto={setSelectedPhoto}
          scrollTop ={scrollTop}
          setScrollTop={setScrollTop}/>
      </div>
      <div className ='image-block' style={selectedPhoto.url ? {'color': 'red'} : {'width': '700px', 'height': '800px'} }>
        <ImageExpander selectedPhoto={selectedPhoto}
          width={width}
          setWidth={setWidth}
          height={height}
          setHeight={setHeight}/>
        <ImageThumbnailList id='mainCarousel'
          alternateClass={''}
          selectedPhoto={selectedPhoto} photos={props.selectedStyle.photos}
          setSelectedPhoto={setSelectedPhoto}
          scrollTop ={scrollTop}
          setScrollTop={setScrollTop}/>
        <ImageNavigator
          setSelectedPhoto={setSelectedPhoto}
          selectedPhoto={selectedPhoto}
          photos={props.selectedStyle.photos} direction='right'>
        </ImageNavigator>
        <ImageNavigator
          setSelectedPhoto={setSelectedPhoto}
          selectedPhoto={selectedPhoto}
          photos={props.selectedStyle.photos} direction='left'>
        </ImageNavigator>
        <AiOutlineExpand
          id='expander-btn'
          onClick={expandImage}>
        </AiOutlineExpand>
      </div>
    </div>

  );
};

export default ImageContainer;