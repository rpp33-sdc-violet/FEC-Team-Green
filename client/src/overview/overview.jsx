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
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  //
  useEffect(() => {
    console.log('selectedStyle:-->> ', props);
    setSelectedStyle(props.productStyles[0]);
  }, []);

  return (

    < div className='overview-wrapper' >
      <div> <ImageContainer selectedStyle={selectedStyle}></ImageContainer> </div>
      {/* <div>{selectedStyle}</div> */}
      <div>
        <ProductInformationContainer product={props.product}></ProductInformationContainer>

        <StyleSelectorContainer productStyles={props.productStyles} setSelectedStyle={setSelectedStyle} selectedStyle={selectedStyle} ></StyleSelectorContainer>

        <SelectProductContainer setSelectedStyle={setSelectedStyle} selectedStyle={selectedStyle}
          selectedSize={selectedSize}setSelectedSize={setSelectedSize} selectedQuantity={selectedQuantity} selectQuantity={setSelectedQuantity} />
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