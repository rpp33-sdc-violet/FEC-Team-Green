import React from 'react';
import CardInfo from './CardInfo.jsx';

const OutfitCard = (props) => {


  return (
    <div className='outfitCard'>
      {/* remove button could be an svg  */}
      {/* <div className='removeCurrentOutfit'></div> */}
      <div className='outfitImg'></div>
      {/* Will trial a card info sub-component for now */}
      {/* <h1>OutfitCard</h1> */}
      <CardInfo />
    </div>
  );

};

export default OutfitCard;