import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Overview from './Overview';
import ImageContainer from './components/ImageContainer';
import StyleSelectorContainer from './components/StyleSelectorContainer';
import SelectProductContainer from './components/SelectProductContainer';
import ProductInformationContainer from './components/ProductInformationContainer';
configure({ adapter: new Adapter() });
import ProductDescription from './components/ProductDescription';
import ProductFeatureList from './components/ProductFeatureList';
/* ======================IMAGE_CONTAINER_TESTS======================*/

describe('ImageContainer', () => {
  test('ImageContainer component renders', () => {
    const heading = shallow(
      <ImageContainer />
    );

    expect(heading.find('.image-container').text()).toEqual('ImageContainer');
    // expect(heading.find('h3').text()).toEqual('Overview');
  });
});

/* ==================PRODUCT_INFORMATION_CONTAINER_TESTS======================*/

describe('ProductInformationContainer', () => {
  test('Product Information component renders', () => {
    const heading = shallow(
      <ProductInformationContainer />
    );

    expect(heading.find('.information').text()).toEqual('ProductInformationContainer');
    // expect(heading.find('h3').text()).toEqual('Overview');
  });
});
/* ==================SELECT_PRODUCT_CONTAINER_TESTS======================*/

describe('SelectProductContainer', () => {
  test('Select Product component renders', () => {
    const heading = shallow(
      <SelectProductContainer/>
    );

    expect(heading.find('.select-product').text()).toEqual('SelectProductContainer');
    // expect(heading.find('h3').text()).toEqual('Overview');
  });
});
/* ==================STYLE_SELECTOR_CONTAINER_TESTS======================*/

describe('StyleSelectorContainer', () => {
  test('StyleSelector renders', () => {
    const heading = shallow(
      <StyleSelectorContainer />
    );

    expect(heading.find('.style-selector').text()).toEqual('StyleSelectorContainer');
    // expect(heading.find('h3').text()).toEqual('Overview');
  });
});


describe('ProductDescription', () => {
  test('Description components render', () => {
    const heading = shallow(
      <ProductDescription/>
    );

    expect(heading.find('.description').text()).toEqual('ProductDescription');
    expect(heading.find('.slogan').text()).toEqual('ProductSlogan');

    // expect(heading.find('h3').text()).toEqual('Overview');
  });

  test('Product Features render', () => {
    const heading = shallow(
      <ProductFeatureList/>
    );

    expect(heading.find('.feature-list').text()).toEqual('FeatureList');
  });

});



