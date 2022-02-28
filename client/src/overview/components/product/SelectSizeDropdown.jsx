import React, {useState} from 'react';

//this is the container for my size selector
const SelectSizeDropdown = (props) => {

  //props
  //selectedStyleSizes(list)
  //setSelectedSize()

  var options = [];
  // options.push(<option key={0}>{'Select Size'}</option>);
  if (props.sizes) {
    // var options = (Object.keys(props.sizes).filter(skuKey => props.sizes[skuKey].quantity > 0), => {
    var len = Object.keys(props.sizes).length;
    for (var skuKey of Object.keys(props.sizes) ) {
      // console.log('skuKey ', skuKey);
      // console.log('skuKey2 ', props.sizes[skuKey]);

      if (props.sizes[skuKey] && props.sizes[skuKey].quantity > 0) {
        options.push(<option key={skuKey} >{skuKey}</option>);

      }
    }

  }
  // console.log('options? ', options);

  options.length > 0 ? options.unshift(<option key={0}>{'Select Size'}</option>) : options.unshift(<option key={0}>{'OUT OF STOCK'}</option>);

  return (

    <select className ='select-size'id='ss'
      onChange={(e)=> {
        if (props.sizeAndQuantity.quantity === '-' ) {
          props.setSizeAndQuantity({...props.sizeAndQuantity, size: e.target.value, quantity: 1 });
        } else if (e.target.value === 'Select Size') {
          props.setSizeAndQuantity({ ...props.sizeAndQuantity, size: e.target.value, quantity: '-'} );
        } else {
          props.setSizeAndQuantity({...props.sizeAndQuantity, size: e.target.value} );
        }
      }}disabled={options[0].props.children === 'OUT OF STOCK' ? true : false} >
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