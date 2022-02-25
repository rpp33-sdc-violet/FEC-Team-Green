import React, {useState} from 'react';

//this is the container for my size selector
const SelectSizeDropdown = (props) => {

  //props
  //selectedStyleSizes(list)
  //setSelectedSize()

  var options = [];
  options.push(<option key={0}>{'Select Size'}</option>);
  var options2 = (Object.keys(props.sizes).map(skuKey => {
    return <option key={skuKey} >{skuKey}</option>;
  }));
  options = options.concat(options2);

  // options.unshift(<option>Select Size</option>);
  return (

    <select className ='select-size' onChange={(e)=> {
      props.setSelectedSize(e.target.value);
      // props.setSizeAndQuantity({ ...myState, size: e.target.value});
      if (props.selectedQuantity === '-') {
      } props.setSelectedQuantity(1);
      if (e.target.value === 'Select Size') {
        props.setSelectedQuantity('-');
        props.setSizeAndQuantity({'quantity': '-'});

        console.log('sizeandQ', props.sizeAndQuantity);

      }
    }}>
      {options}
    </select>

  );
};

export default SelectSizeDropdown;

//allows user to select a size from a list.

/*
Test if I click the button will a dropdown menu appear.
Test will only the available sizes for a chosen style appear.
*/