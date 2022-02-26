import React, {useState, useEffect} from 'react';
import ImageExpander from './ImageExpander.jsx';
import ImageThumbnailList from './ImageThumbnailList.jsx';
import ImageThumbnail from './ImageThumbnail.jsx';
var ImageContainer = (props) => {

  //props props.toggleSize;


  const [selectedPhoto, setSelectedPhoto] = useState('loading');
  const [currentStyleId, setCurrentStyleId] = useState(0);

  useEffect(()=> {
    if ( props.selectedStyle.photos && (selectedPhoto === 'loading' || currentStyleId !== props.selectedStyle['style_id'] )) {
      setSelectedPhoto(
        props.selectedStyle.photos[0].url);
      setCurrentStyleId( props.selectedStyle.style_id);
    }
  });
  console.log('selected photo ', selectedPhoto);
  return (

    <div className ='image-container'>
      <div className ='image-block'>
        <ImageExpander selectedPhoto={selectedPhoto}/>
        <ImageThumbnailList selectedPhoto={selectedPhoto} photos={props.selectedStyle.photos} setSelectedPhoto={setSelectedPhoto}/>
      </div>

    </div>

  );
};

export default ImageContainer;