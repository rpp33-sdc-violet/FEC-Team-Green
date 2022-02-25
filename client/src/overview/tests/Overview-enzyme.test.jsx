import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Overview from '../Overview';
import ImageContainer from '../components/Image/ImageContainer';
import ImageExpander from '../components/Image/ImageExpander';
import StyleSelectorContainer from '../components/style/StyleSelectorContainer';
import SelectProductContainer from '../components/product/SelectProductContainer';
import ProductInformationContainer from '../components/details/ProductInformationContainer';
configure({ adapter: new Adapter() });
import ProductDescription from '../components/details/ProductDescription';
import ProductFeatureList from '../components/details/ProductFeatureList';
import exampleStyleData from '../../data/exampleStyleData.js';
import exampleProductData from '../../data/exampleProductData.js';
/* ======================IMAGE_CONTAINER_TESTS======================*/

describe('ImageContainer', () => {
  test('ImageContainer component renders', () => {
    const heading = shallow(
      <ImageExpander />
    );

    expect(heading.find('.image-container').text()).toEqual('...loading');
    // expect(heading.find('h3').text()).toEqual('Overview');
  });
});

/* ==================PRODUCT_INFORMATION_CONTAINER_TESTS======================*/

describe('ProductInformationContainer', () => {
  test('Product Information component renders', () => {
    const heading = shallow(
      <ProductInformationContainer />
    );

    expect(heading.find('.category').text()).toEqual('...loading');
    // expect(heading.find('h3').text()).toEqual('Overview');
  });
});
/* ==================SELECT_PRODUCT_CONTAINER_TESTS======================*/

// describe('SelectProductContainer', () => {
//   test('Select Product component renders', () => {
//     const heading = shallow(
//       <SelectProductContainer />
//     );

//     expect(heading.find('.select-size')).toExist();
//     // expect(heading.find('h3').text()).toEqual('Overview');
//   });
// });
/* ==================STYLE_SELECTOR_CONTAINER_TESTS======================*/

describe('StyleSelectorContainer sad path', () => {
  test('StyleSelector renders when no data given', () => {
    const heading = shallow(
      <StyleSelectorContainer />
    );

    expect(heading.find('.style-tag').text()).toEqual('...loading');
    // expect(heading.find('h3').text()).toEqual('Overview');
  });
});

/* ==================PRODUCT_DESCRIPTION_CONTAINER_TESTS======================*/
describe('ProductDescription', () => {
  test('Description components render when no data is given', () => {
    const heading = shallow(
      <ProductDescription/>
    );


    expect(heading.find('.description').text()).toEqual('...loading');
    expect(heading.find('.slogan').text()).toEqual('...loading');

    // expect(heading.find('h3').text()).toEqual('Overview');
  });

  test('Product Features render', () => {
    const heading = shallow(
      <ProductFeatureList/>
    );

    expect(heading.find('.feature-list').text()).toEqual('FeatureList');
  });
});
describe('ProductDescription', () => {
  test('Description components render when data is given', () => {
    const heading = shallow(
      <SelectProductContainer/>
    );


    expect(heading.find('.description').text()).toEqual('ProductDescription');
    expect(heading.find('.slogan').text()).toEqual('ProductSlogan');

    // expect(heading.find('h3').text()).toEqual('Overview');
  });

});
