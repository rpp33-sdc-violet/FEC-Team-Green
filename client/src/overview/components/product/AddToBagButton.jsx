import React, {useState} from 'react';
// import StyleList from './StyleList.jsx';

//this is the button to add items to user's cart/bag
const AddToBagButton = (props) => {

  //props
  //selectedStyleSize
  //selectedStyleQuantity

  var onClick = () => {
    if (props.sizeAndQuantity.size === 'Select Size' ) {
      var select = $('#ss');
      var len = select[0].length;
      $('#ss').attr('size', len);
      $('span').show();
      select.click(()=>{
        $('#ss').attr('size', 1);
        $('span').hide();
      });
    } else {
      console.log('Ajax call');

    }

  };

  return (
    <button className ='select-bag' id='select-bag' onClick={onClick}>
      AddToBagButton
    </button>
  );
};

export default AddToBagButton;

//allows user to add ite to cart/bag.
// if size  has not been selected/ open that dropdown

/*
Test if I click the button and the conditions have been satisfied will server request happen.
Test if I click the button and size has not been satisfied will select size dropdown open
Test data is correctly passed back to server call.
*/