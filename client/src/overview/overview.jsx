import React, { useState, useEffect } from 'react';
import StyleSelectorContainer from './components/style/StyleSelectorContainer.jsx';
import SelectProductContainer from './components/product/SelectProductContainer.jsx';
import ProductDescription from './components/details/ProductDescription.jsx';
import ImageContainer from './components/image/ImageContainer.jsx';
import ProductFeatureList from './components/details/ProductFeatureList.jsx';
import ProductInformationContainer from './components/details/ProductInformationContainer.jsx';
import './styles/style.css';



const Overview = (props) => {

  // props.product
  // props.productList
  //const [urlList, setUrlList] = useState([]);
  //const [thumbUrlList, setThumbUrlList] = useState([]);


  const [styleList, setStyleList] = useState([]);
  // styleList will contain an array of styles for a specific product

  const [productOverview, setProductOverview] = useState({});
  // product overview will contain
  //  id, name, slogan, description, category, default_price, features (an array)

  const [selectedStyle, setSelectedStyle] = useState({skus: {}, size: 0});
  const [selectedSize, setSelectedSize] = useState('Select Size');
  const [selectedQuantity, setSelectedQuantity] = useState('-');

  //
  useEffect(() => {
    console.log('1: ', selectedStyle);

    console.log('pstyles: ', props.productStyles);

    setSelectedStyle((props.productStyles !== undefined ? props.productStyles[0] : {skus: {}, size: 0}) );

    console.log('2: ', selectedStyle);
  }, []);




  return (

    < div className='overview-wrapper' >
      <ImageContainer selectedStyle={selectedStyle}></ImageContainer>
      {/* <div>{selectedStyle}</div> */}
      <div className='rightPanel'>
        <ProductInformationContainer product={props.product}></ProductInformationContainer>

        <StyleSelectorContainer productStyles={props.productStyles} setSelectedStyle={setSelectedStyle} selectedStyle={selectedStyle} ></StyleSelectorContainer>

        <SelectProductContainer setSelectedStyle={setSelectedStyle} selectedStyle={selectedStyle}
          selectedSize={selectedSize}setSelectedSize={setSelectedSize} selectedQuantity={selectedQuantity} setSelectedQuantity={setSelectedQuantity} />
      </div>
      <ProductDescription description={props.product.description} slogan={props.product.slogan}></ProductDescription>
      <ProductFeatureList></ProductFeatureList>
    </div >
  );

};

export default Overview;

//  Image container contains all compoents and logic for displaying images
// Product Description  displays all text describing the product
// styleSelectorContainer contains all components and logic for selecting style
// ct Produc allows you to select size, quantitiy and add p roduct to bag--it also allows you to add product to outfit
//If the size has not been selected, then the quantity dropdown will display ‘-’ and the dropdown will be disabled.
//Once a size has been selected, the dropdown should default to 1.

