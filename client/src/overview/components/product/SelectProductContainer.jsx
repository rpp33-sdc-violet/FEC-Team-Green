import React, { useState, useEffect } from 'react';
import SelectSizeDropdown from './SelectSizeDropdown.jsx';
import SelectQuantityDropdown from './SelectQuantityDropdown.jsx';
import SelectOutfitButton from './SelectOutfitButton.jsx';
import AddToBagButton from './AddToBagButton.jsx';
//this is the container for all parts  add product functionality
//this component will make calls to API

const SelectProductContainer = (props) => {

  const [sizeAndQuantity, setSizeAndQuantity] = useState({'size': 'Select Size', 'quantity': '-', 'skuId': ''});
  const [inStock, setInStock] = useState(false);

  var sizes = {};
  if (props.selectedStyle) {

    Object.keys(props.selectedStyle.skus).forEach(skuKey => {
      // console.log(skuKey, 'skuKey', props.selectedStyle.skus[skuKey].quantity);

      if (props.selectedStyle.skus[skuKey].quantity > 0 ) {
        sizes[props.selectedStyle.skus[skuKey].size] = {'quantity': props.selectedStyle.skus[skuKey].quantity, 'skuId': skuKey};
      }
    });
  }
  useEffect(()=> {

    if (Object.keys(sizes).length > 0) {
      setInStock(true);
    }
  }, [props.selectedStyle]);


  return (
    //maybe this should be a high order function?
    <div className={'select-product panel '}>
      <span id='select-message'> Please select a size</span>
      <SelectSizeDropdown
        sizes={sizes}
        sizeAndQuantity={sizeAndQuantity}
        setSizeAndQuantity={setSizeAndQuantity}
        theme={props.theme}
        inStock={inStock}
        setInStock={setInStock}/>
      <SelectQuantityDropdown
        sizes={sizes}
        sizeAndQuantity={sizeAndQuantity}
        setSizeAndQuantity={setSizeAndQuantity}
        theme={props.theme}
        inStock={inStock}/>
      <AddToBagButton
        sizeAndQuantity={sizeAndQuantity}
        theme={props.theme}
        inStock={inStock}/>
      <SelectOutfitButton
        theme={props.theme} />
    </div>

  );
};

export default SelectProductContainer;

// allows user to select size quantity and the add item to cart.
// also allows user to add item to outfit carousel.

//Test is default size 'SELECT SIZE'?
//Test is default quantity 1?
