import React, {useState} from 'react';

//this is the container for my size selector
const SelectSizeDropdown = (props) => {

  var options = [];
  // if any sizes are available, search through them and find the sizes with quantities above 0
  if (props.sizes) {
    var len = Object.keys(props.sizes).length;
    for (var skuKey of Object.keys(props.sizes) ) {

      if (props.sizes[skuKey] && props.sizes[skuKey].quantity > 0) {
        options.push(<option key={skuKey} >{skuKey}</option>);

      }
    }

  }

  //display OUT OF STOCK if no stock available
  // console.log('props skuID', props);
  options.length > 0 ? options.unshift(<option key={0}>{'Select Size'}</option>) : options.unshift(<option key={0}>{'OUT OF STOCK'}</option>);
  options[0].props.children === 'OUT OF STOCK' ? props.setInStock(false) : props.setInStock(true);
  return (

    <select className ={`select-size ${props.theme}`}id='ss'
      onChange={(e)=> {
        if (props.sizeAndQuantity.quantity === '-' ) {
          props.setSizeAndQuantity({...props.sizeAndQuantity, size: e.target.value, quantity: 1, skuId: props.sizes[e.target.value].skuId });
        } else if (e.target.value === 'Select Size') {
          props.setSizeAndQuantity({ ...props.sizeAndQuantity, size: e.target.value, quantity: '-', skuId: ''} );
        } else {
          props.setSizeAndQuantity({...props.sizeAndQuantity, size: e.target.value, skuId: props.sizes[e.target.value].skuId} );
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