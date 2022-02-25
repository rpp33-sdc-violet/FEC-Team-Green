import React, { useState } from 'react';
import SelectSizeDropdown from './SelectSizeDropdown.jsx';
import SelectQuantityDropdown from './SelectQuantityDropdown.jsx';
import SelectOutfitButton from './SelectOutfitButton.jsx';
import AddToBagButton from './AddToBagButton.jsx';
//this is the container for all parts  add product functionality
//this component will make calls to API

const SelectProductContainer = (props) => {


  //props
  //selectedStyle {}
  //selectedQuantity default '-'
  //selectedSize default 'SELECT SIZE'
  //setSelectedSize ()
  //setSelectedQuantity ()
  const [selectedSize, setSelectedSize] = useState('Select Size');
  const [selectedQuantity, setSelectedQuantity] = useState('-');
  const [sizeAndQuantity, setSizeAndQuantity] = useState({'size': 'Select Size', 'quantity': '-'});


  var sizes = {};
  if (props.selectedStyle) {

    Object.keys(props.selectedStyle.skus).forEach(skuKey => {
      sizes[props.selectedStyle.skus[skuKey].size] = {'quantity': props.selectedStyle.skus[skuKey].quantity, 'skuId': skuKey};
    });
  }

  return (

    <div className='select-product panel'>
      <SelectSizeDropdown sizes={sizes} selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
        selectedQuantity={selectedQuantity} setSelectedQuantity={setSelectedQuantity} sizeAndQuantity={sizeAndQuantity} setSizeAndQuantity={setSizeAndQuantity}/>
      <SelectQuantityDropdown sizes={sizes} selectedQuantity={selectedQuantity} setSelectedQuantity={setSelectedQuantity} selectedSize = {selectedSize} sizeAndQuantity={sizeAndQuantity} setSizeAndQuantity={setSizeAndQuantity}/>

      <AddToBagButton />
      <SelectOutfitButton />
    </div>

  );
};

export default SelectProductContainer;

// allows user to select size quantity and the add item to cart.
// also allows user to add item to outfit carousel.

//Test is default size 'SELECT SIZE'?
//Test is default quantity 1?
