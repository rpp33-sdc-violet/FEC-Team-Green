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


  var sizes = {};
  Object.keys(props.selectedStyle.skus).forEach(skuKey => {
    sizes[props.selectedStyle.skus[skuKey].size] = {'quantity': props.selectedStyle.skus[skuKey].quantity, 'skuId': skuKey};
  });

  var sizes = {};
  Object.keys(props.selectedStyle.skus).forEach(skuKey => {
    sizes[props.selectedStyle.skus[skuKey].size] = {'quantity': props.selectedStyle.skus[skuKey].quantity, 'skuId': skuKey};
  });

  return (
    <div>
      SelectProductContainer

      <div className='select-product panel'>
        <div>  <SelectSizeDropdown sizes={sizes} selectedSize={props.selectedSize}
          setSelectedSize={props.setSelectedSize}
          selectedQuantity={props.selectedQuantity} setSelectedQuantity={props.setSelectedQuantity} /></div>
        <div> <SelectQuantityDropdown sizes={sizes} selectedQuantity={props.selectedQuantity} setSelectedQuantity={props.setSelectedQuantity}/></div>

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
