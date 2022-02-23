import React, {useState} from 'react';

//this is the container for my quantity selector
const SelectQuantityDropdown = (props) => {

  //props
  //selectedStyleQuantity
  //setSelectedQuantity()


  // var options = objects.keys(sizes).map(key => {
  //   return <option>key</option>;
  // });
  console.log('selectedq: ', props);
  // var options =

  return (

    <select className ={`select-quantity ${(props.selectedQuantity === '-') ? 'disabled' : ''}`}>
      <option>{props.selectedQuantity}</option>
      SelectQuantityDropdown
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