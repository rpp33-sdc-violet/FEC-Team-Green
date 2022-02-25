import React, {useState} from 'react';

//this is the container for my size selector
const SelectSizeDropdown = (props) => {

  //props
  //selectedStyleSizes(list)
  //setSelectedSize()

  var options = [];
  options.push(<option key={0}>{'Select Size'}</option>);
  if (props.sizes) {
    var options2 = (Object.keys(props.sizes).map(skuKey => {
      return <option key={skuKey} >{skuKey}</option>;
    }));
    options = options.concat(options2);
  }

  // options.unshift(<option>Select Size</option>);
  return (

    <select className ='select-size' onChange={(e)=> {
      if (props.sizeAndQuantity.quantity === '-' ) {
        props.setSizeAndQuantity({...props.sizeAndQuantity, size: e.target.value, quantity: 1 });
      } else if (e.target.value === 'Select Size') {
        props.setSizeAndQuantity({ ...props.sizeAndQuantity, size: e.target.value, quantity: '-'} );
      } else {
        props.setSizeAndQuantity({...props.sizeAndQuantity, size: e.target.value} );
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