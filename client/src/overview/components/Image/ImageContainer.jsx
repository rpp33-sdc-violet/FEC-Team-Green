import React, {useState, useEffect} from 'react';
import ImageExpander from './ImageExpander.jsx';
import ImageThumbnailList from './ImageThumbnailList.jsx';
import ImageThumbnail from './ImageThumbnail.jsx';
import { AiOutlineExpand } from 'react-icons/ai';
import ImageNavigator from './ImageNavigator.jsx';

var ImageContainer = (props) => {

  // this state helps keep track of the current style and current picture for the gallery
  const [selectedPhoto, setSelectedPhoto] = useState('loading');
  const [currentStyleId, setCurrentStyleId] = useState(0);

  var expandImage = () => {
    // var imageModal = $('#image-modal-frame');
    // imageModal.css('display') === 'none' ?
    //   imageModal.css('display', 'flex') :
    //   imageModal.css('display', 'none');

    var imageModal = $('#image-modal-frame');
    var wrapperWidth = $('.overview-wrapper').width();
    var wrapperHeight = $('.overview-wrapper').height();
    // console.log('img width', wrapperWidth);

    imageModal.css('width', `${wrapperWidth * .95}px`);
    imageModal.css('height', `${wrapperHeight * .95}px`);
    imageModal.toggle();




  };
  // set state ONLY if it has never been set before or the style changes
  useEffect(()=> {

    if ( props.selectedStyle.photos && (selectedPhoto === 'loading' || currentStyleId !== props.selectedStyle['style_id'] )) {
      var selected = props.selectedStyle.photos[selectedPhoto.index ? selectedPhoto.index : 0];
      selected.index = 0;
      setSelectedPhoto(
        selected);
      setCurrentStyleId( props.selectedStyle.style_id);
    }
  });

  // I would like to eventually rename image-container to image-gallery and image-block to image-container
  return (
    <div className ='image-container'>
      <div id='image-modal-frame'>
        <ImageNavigator setSelectedPhoto={setSelectedPhoto} selectedPhoto={selectedPhoto} photos={props.selectedStyle.photos} direction='right' id='rightExpanded'></ImageNavigator>
        <ImageExpander selectedPhoto={selectedPhoto} modal={true}/>
        <ImageNavigator setSelectedPhoto={setSelectedPhoto} selectedPhoto={selectedPhoto} photos={props.selectedStyle.photos} direction='left' id='leftExpanded'></ImageNavigator>
        <AiOutlineExpand id='expander-btn' onClick={expandImage}></AiOutlineExpand>
        <ImageThumbnailList id='miniCarousel' alternateClass={'img-icons'} selectedPhoto={selectedPhoto} photos={props.selectedStyle.photos} setSelectedPhoto={setSelectedPhoto}/>

      </div>
      <div className ='image-block' style={selectedPhoto.url ? {'color': 'red'} : {'width': '700px', 'height': '800px'} }>
        <ImageExpander selectedPhoto={selectedPhoto}/>
        <ImageThumbnailList id='mainCarousel' alternateClass={''}selectedPhoto={selectedPhoto} photos={props.selectedStyle.photos} setSelectedPhoto={setSelectedPhoto}/>
        <ImageNavigator setSelectedPhoto={setSelectedPhoto} selectedPhoto={selectedPhoto} photos={props.selectedStyle.photos} direction='right'></ImageNavigator>
        <ImageNavigator setSelectedPhoto={setSelectedPhoto} selectedPhoto={selectedPhoto} photos={props.selectedStyle.photos} direction='left'></ImageNavigator>
        <AiOutlineExpand id='expander-btn' onClick={expandImage}></AiOutlineExpand>

      </div>
    </div>

  );
};

export default ImageContainer;