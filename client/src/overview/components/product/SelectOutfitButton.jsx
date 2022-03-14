import React, {useState} from 'react';


//this button add's outfits to christians Component
import {AiOutlineStar} from 'react-icons/ai';
const SelectOutfitButton = (props) => {

  //props
  //not sure yet
  //


  //disabled ={props.inStock ? false : true}
  return (

    <button className ={`select-outfit ${props.theme}`} aria-label='add to outfit carousel' >
      <AiOutlineStar> </AiOutlineStar>
    </button>

  );
};

export default SelectOutfitButton;

//allows user to add item to outfit carousel.

/*
Test if I click the button item will appear in carousel (****SEE CHRISTIAN)
.
*/