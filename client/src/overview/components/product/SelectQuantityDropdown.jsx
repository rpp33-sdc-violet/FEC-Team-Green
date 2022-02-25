import React, {useState} from 'react';

//this is the container for my quantity selector
const SelectQuantityDropdown = (props) => {

  //props
  //selectedStyleQuantity
  //setSelectedQuantity()


  // var options = objects.keys(sizes).map(key => {
  var i = 1;
  var options = [];
 
  if ( Object.keys(props.sizes).length > 0 && props.selectedSize !== 'Select Size') {
    while (i < 16 && i < props.sizes[props.selectedSize].quantity) {
      options.push(<option key={i}>{i}</option>);
      i++;
    }
  }
  console.log('options ', options);

  return (
    <select className ={`select-quantity ${(props.selectedQuantity === '-') ? 'disabled' : ''}`}>
      {props.selectedQuantity === '-' ? <option>{props.selectedQuantity}</option> : options }
    </select>
  );
};

export default SelectQuantityDropdown;

//allows user to select a quantity from a list.
// from 1 to either quantity or 15, which ever is smaller

/*
Test if I click the button will a dropdown menu appear.
Test if numbers in list stop when reaching 15 when quantitiy is larger.
Test if numbers in list stop before reaching 15 when quantitiy is smaller than 15

*/