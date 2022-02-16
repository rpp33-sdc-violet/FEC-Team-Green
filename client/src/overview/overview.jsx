<<<<<<< HEAD
import React, { useState, UseEffect } from 'react';
=======
import React, { useState, useEffect } from 'react';
>>>>>>> main
import StyleSelectorContainer from './components/StyleSelectorContainer.jsx';
import SelectProductContainer from './components/SelectProductContainer.jsx';
import ProductDescription from './components/ProductDescription.jsx';
import ImageContainer from './components/ImageContainer.jsx';
<<<<<<< HEAD
=======
import ProductFeatureList from './components/ProductFeatureList.jsx';
import ProductInformationContainer from './components/ProductInformationContainer.jsx';
import styles from './styles/style.css';
>>>>>>> main

// var oStyle = {
//   'display': 'grid',
//   'backgroundColor': 'aqua',
//   // 'grid-template-columns': '2fr 1fr',
//   // 'grid-template-rows': 'minmax(100px, auto)',
//   'grid-template-rows': '2fr 1fr',
// };
// var interactivePanelStyle = {
//   'grid-template-rows': '1fr 1fr 1fr',
// };
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


<<<<<<< HEAD
  // useEffect(()=> {
=======
  useEffect(() => {
>>>>>>> main

  // });

  return (
    < div className='overview-wrapper' >

      <div> <ImageContainer></ImageContainer> </div>
      <div>
        <ProductInformationContainer></ProductInformationContainer>
        <StyleSelectorContainer></StyleSelectorContainer>
        <SelectProductContainer></SelectProductContainer>
      </div>
      <ProductDescription></ProductDescription>

      <ProductFeatureList></ProductFeatureList>
    </div >
  );

};

export default Overview;

//  Image container contains all compoents and logic for displaying images
// Product Description  displays all text describing the product
// styleSelectorContainer contains all components and logic for selecting style
// ct Produc allows you to select size, quantitiy and add p roduct to bag--it also allows you to add product to outfit

