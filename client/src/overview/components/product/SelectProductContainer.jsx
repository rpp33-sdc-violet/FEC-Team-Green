import React, { useState } from 'react';
import SelectSizeDropdown from './SelectSizeDropdown.jsx';
import SelectQuantityDropdown from './SelectQuantityDropdown.jsx';
import SelectOutfitButton from './SelectOutfitButton.jsx';
import AddToBagButton from './AddToBagButton.jsx';
//this is the container for all parts  add product functionality
//this component will make calls to API

const SelectProductContainer = (props) => {

  //props
  //selectedStyle (id?)
  //selectedStyleSizes(list)
  //selectedStylQuantity number

  //state
  //selectedSize default 'SELECT SIZE'
  //selectedQuantity default 1
  //

  console.log('sizes', props.selectedStyle.skus);

  var sizes = {};
  Object.keys(props.selectedStyle.skus).forEach(skuKey => {
    sizes[props.selectedStyle.skus[skuKey].size] = {'quantity': props.selectedStyle.skus[skuKey].quantity, 'skuId': skuKey};
  });
  console.log('sizes', sizes);


  return (
    <div>
      SelectProductContainer

      <div className='select-product panel'>
        <div>  <SelectSizeDropdown sizes={sizes} selectedSize={props.selectedSize} /></div>
        <div> <SelectQuantityDropdown sizes={sizes} /></div>

        <AddToBagButton />
        <SelectOutfitButton />
      </div>
    </div>
  );
};

export default SelectProductContainer;

// allows user to select size quantity and the add item to cart.
// also allows user to add item to outfit carousel.

//Test is default size 'SELECT SIZE'?
//Test is default quantity 1?
