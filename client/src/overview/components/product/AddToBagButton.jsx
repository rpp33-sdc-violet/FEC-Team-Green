import React, {useState} from 'react';
import axios from 'axios';
import $ from 'jquery';
// import StyleList from './StyleList.jsx';

//this is the button to add items to user's cart/bag
const AddToBagButton = (props) => {

  //props
  //selectedStyleSize
  //selectedStyleQuantity

  var onClick = () => {
    if (props.sizeAndQuantity.size === 'Select Size' ) {
      var select = $('#ss');
      var len = select[0].length;
      $('#ss').attr('size', len);
      $('span').show();
      select.click(()=>{
        $('#ss').attr('size', 1);
        $('span').hide();
      });
    } else {
      // var quantity =
      //create an array that has 'quantity' number of spaces'
      let filledArray = new Array(Number(props.sizeAndQuantity.quantity)).fill('/api/cart'); // had to fill it with something

      // map that array and fill it with axio posts.
      var responses = filledArray.map(req => {
        return axios.post('/api/cart', {
          'sku_id': props.sizeAndQuantity.skuId,
          // 'count': props.sizeAndQuantity.quantity
        });
      });
      //use axios.all to catch all responses.
      axios.all(responses).then(axios.spread((...responses) => {

      })).then(()=>{
        console.log('succesfully posted to cart API');
        //reset size and quantity state
        props.setSizeAndQuantity({...props.sizeAndQuantity, size: 'Select Size', quantity: '-', skuId: ''});
        // $('select-size')
        //reset size selector
        var sizeSelector = document.querySelector('.select-size').querySelector('option');
        sizeSelector.selected = true;

        // print out the contents of my cart.
        axios.get('/api/cart')
          .then(data => {
            console.log('cart contents:', data.data);
          }).catch(error => {
            console.log('error', error);
          });
      })
        .catch(error => {
        // react on errors.
          console.log('error', error);
        });
    }
    //style={document.querySelector('#ss').querySelector('option')[0]}
  };

  return (
    <button className ={`select-bag ${props.theme}`} id='select-bag' onClick={onClick} >
      Add To Bag
    </button>
  );
};

export default AddToBagButton;

//allows user to add ite to cart/bag.
// if size  has not been selected/ open that dropdown

/*
Test if I click the button and the conditions have been satisfied will server request happen.
Test if I click the button and size has not been satisfied will select size dropdown open
Test data is correctly passed back to server call.
*/