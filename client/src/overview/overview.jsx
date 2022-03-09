import React, { useState, useEffect } from 'react';
import StyleSelectorContainer from './components/style/StyleSelectorContainer.jsx';
import SelectProductContainer from './components/product/SelectProductContainer.jsx';
import ProductDescription from './components/details/ProductDescription.jsx';
import ImageContainer from './components/Image/ImageContainer.jsx';
import ProductFeatureList from './components/details/ProductFeatureList.jsx';
import ProductInformationContainer from './components/details/ProductInformationContainer.jsx';
import './styles/style.css';



const Overview = (props) => {

  // props.product
  // props.productList


  const [styleList, setStyleList] = useState([]);
  // styleList will contain an array of styles for a specific product

  const [productOverview, setProductOverview] = useState({});
  // product overview will contain
  //  id, name, slogan, description, category, default_price, features (an array)
  const [selectedStyle, setSelectedStyle] = useState({skus: {}, size: 0});


  //
  useEffect(() => {
  //set up style as first style in data or as an empty style object
    setSelectedStyle((props.productStyles !== undefined ? props.productStyles[0] : {skus: {}, size: 0}) );

  }, [props.productStyles]);


  return (

    < div className='overview-wrapper' >
      { selectedStyle.photos ? <ImageContainer selectedStyle={selectedStyle}></ImageContainer> :
        <div> loading </div>
      }

      {/* <div>{selectedStyle}</div> */}
      <div className='rightPanel'>
        <ProductInformationContainer product={props.product} sale_price={selectedStyle.sale_price} original_price ={selectedStyle.original_price}></ProductInformationContainer>

        <StyleSelectorContainer productStyles={props.productStyles} setSelectedStyle={setSelectedStyle} selectedStyle={selectedStyle} ></StyleSelectorContainer>

        <SelectProductContainer selectedStyle={selectedStyle}/>
      </div>
      <ProductDescription description={props.product.description} slogan={props.product.slogan}></ProductDescription>
      <ProductFeatureList features={props.product.features}></ProductFeatureList>
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

