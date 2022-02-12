import React, { useState, UseEffect } from 'react';
import StyleSelectorContainer from './StyleSelectorContainer.jsx';
import SelectProductContainer from './SelectProductContainer.jsx';
import ProductDescription from './ProductDescription.jsx';
import ImageContainer from './ImageContainer.jsx';

const Overview = (props) => {

  //const [urlList, setUrlList] = useState([]);
  //const [thumbUrlList, setThumbUrlList] = useState([]);


  const [styleList, setStyleList] = useState([]);
  // styleList will contain an array of styles for a specific product

  const [productOverview, setProductOverview] = useState({});
  // product overview will contain
  //  id, name, slogan, description, category, default_price, features (an array)

  const [selectedStyle, setSelectedStyle] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState('');


  useEffect(()=> {

  });

  return (
    < div >

      <h3>Overview</h3>

      {/* <ImageContainer></ImageContainer> */}
      {/* <ProductDescription></ProductDescription> */}
      {/* <StyleSelectorContainer></StyleSelectorContainer> */}
      {/* <SelectProductContainer></SelectProductContainer> */}
    </div >
  );

};

export default Overview;

//  Image container contains all compoents and logic for displaying images
// Product Description  displays all text describing the product
// styleSelectorContainer contains all components and logic for selecting style
//select Produc allows you to select size, quantitiy and add product to bag --it also allows you to add product to outfit