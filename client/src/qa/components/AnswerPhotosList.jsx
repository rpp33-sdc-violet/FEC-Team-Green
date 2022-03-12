import React from 'react';
import AnswerPhoto from './AnswerPhoto.jsx';


const AnswerPhotosList = (props) => {
  // props: photos (from IndividualAnswer)
  const photos = props.photos.map((photo) =>
    <AnswerPhoto
      key={photo.id}
      url={photo.url}
      answerer_name={props.answerer_name}
      theme={props.theme} />
  );

  // render: maps to AnswerPhoto
  return (
    <div className="answer-photos-container">
      {photos}
    </div>
  );
};

export default AnswerPhotosList;