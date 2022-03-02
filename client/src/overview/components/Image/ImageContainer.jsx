import React, {useState, useEffect} from 'react';
import ImageExpander from './ImageExpander.jsx';
import ImageThumbnailList from './ImageThumbnailList.jsx';
import ImageThumbnail from './ImageThumbnail.jsx';
import { AiOutlineExpand } from 'react-icons/ai';
var ImageContainer = (props) => {



  // this state helps keep track of the current style and current picture for the gallery
  const [selectedPhoto, setSelectedPhoto] = useState('loading');
  const [currentStyleId, setCurrentStyleId] = useState(0);

  var expandImage = () => {
    var imageModal = $('#image-modal-frame');
    imageModal.css('display') === 'none' ?
      imageModal.css('display', 'flex') :
      imageModal.css('display', 'none');
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
        <ImageExpander selectedPhoto={selectedPhoto} modal={true}/>
        <AiOutlineExpand id='expander-btn' onClick={expandImage}></AiOutlineExpand>
      </div>
      <div className ='image-block'>
        <ImageExpander selectedPhoto={selectedPhoto}/>
        <ImageThumbnailList selectedPhoto={selectedPhoto} photos={props.selectedStyle.photos} setSelectedPhoto={setSelectedPhoto}/>
        <AiOutlineExpand id='expander-btn' onClick={expandImage}></AiOutlineExpand>
      </div>
    </div>

  );
};

export default ImageContainer;