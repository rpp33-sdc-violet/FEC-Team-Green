import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Overview from '../Overview';
import ImageContainer from '../components/Image/ImageContainer';
import ImageExpander from '../components/Image/ImageExpander';
import StyleSelectorContainer from '../components/style/StyleSelectorContainer';
import SelectProductContainer from '../components/product/SelectProductContainer';
import SelectSizeDropdown from '../components/product/SelectSizeDropdown';
import ProductInformationContainer from '../components/details/ProductInformationContainer';
configure({ adapter: new Adapter() });
import ProductDescription from '../components/details/ProductDescription';
import ProductFeatureList from '../components/details/ProductFeatureList';
import exampleStyleData from '../../data/exampleStyleData.js';
import exampleProductData from '../../data/exampleProductData.js';
/* ======================IMAGE_CONTAINER_TESTS======================*/

describe('ImageContainer', () => {
  test('ImageContainer component renders', () => {
    const wrap = shallow(
      <ImageExpander />
    );

    expect(wrap.find('.image-container').text()).toEqual('...loading');
    // expect(wrap.find('h3').text()).toEqual('Overview');
  });
});

/* ==================PRODUCT_INFORMATION_CONTAINER_TESTS======================*/

describe('ProductInformationContainer', () => {
  test('Product Information component renders', () => {
    const wrap = shallow(
      <ProductInformationContainer />
    );

    expect(wrap.find('.category').text()).toEqual('...loading');
    // expect(wrap.find('h3').text()).toEqual('Overview');
  });
});
/* ==================SELECT_PRODUCT_CONTAINER_TESTS======================*/

// describe('SelectProductContainer', () => {
//   test('Select Product component renders', () => {
//     const wrap = shallow(
//       <SelectProductContainer />
//     );

//     expect(wrap.find('.select-size')).toExist();
//     // expect(wrap.find('h3').text()).toEqual('Overview');
//   });
// });
/* ==================STYLE_SELECTOR_CONTAINER_TESTS======================*/

describe('StyleSelectorContainer sad path', () => {
  test('StyleSelector renders when no data given', () => {
    const wrap = shallow(
      <StyleSelectorContainer />
    );

    expect(wrap.find('.style-tag').text()).toEqual('...loading');
    // expect(wrap.find('h3').text()).toEqual('Overview');
  });
});

/* ==================PRODUCT_DESCRIPTION_CONTAINER_TESTS======================*/
describe('ProductDescription', () => {
  test('Description components render when no data is given', () => {
    const wrap = shallow(
      <ProductDescription/>
    );


    expect(wrap.find('.description').text()).toEqual('...loading');
    expect(wrap.find('.slogan').text()).toEqual('...loading');

    // expect(wrap.find('h3').text()).toEqual('Overview');
  });

  test('Product Features render', () => {
    const wrap = shallow(
      <ProductFeatureList/>
    );

    expect(wrap.find('.feature-list').text()).toEqual('FeatureList');
  });
});


describe('SelectSizeDropdown', () => {
  test('SizeDropDown to have  text Select Size and length of 1 when no data is given', () => {
    const wrap = shallow(
      <SelectSizeDropdown/>
    );
    expect(wrap.find('.select-size option').length).toEqual(1);
    expect(wrap.find('.select-size option').text()).toEqual('Select Size');
    console.log('shallow', wrap.props());
  });
  test('SizeDropDown to have options including Select Size and numbers and length of 12 when example data is given', () => {
    const wrap = mount(
      <SelectProductContainer selectedStyle ={exampleStyleData.results[0]}/>
    );
    expect(wrap.find('.select-size option').length).toEqual(12);

    expect(
      wrap.containsMatchingElement(
        <option>Select Size</option>
      )
    ).toBeTruthy();
    expect(
      wrap.containsMatchingElement(
        <option>-</option>
      )
    ).toBeTruthy();
  });
});
describe('SelectSizeDropdown SelectQuantityDropdown Integration', () => {
  test('quantityDropDown to have 14 options when size 7 is selected', () => {
    const wrap = mount(
      <SelectProductContainer selectedStyle ={exampleStyleData.results[0]}/>
    );
    // wrap.setState({sizeAndQuantity: sAndQ});
    wrap.find('select.select-size').simulate('change', { target: { value: 7 }});
    expect(wrap.find('.select-quantity option').length).toEqual(14);

  });
  test('quantityDropDown to change to - when "Select Size" is selected again', () => {
    const wrap = mount(
      <SelectProductContainer selectedStyle ={exampleStyleData.results[0]}/>
    );
    wrap.find('select.select-size').simulate('change', { target: { value: 8 }});
    expect(wrap.find('.select-quantity option').length).toEqual(9);
    wrap.find('select.select-size').simulate('change', { target: { value: 'Select Size' }});
    expect(wrap.find('.select-quantity option').length).toEqual(1);
  });
  test('quantityDropDown max value show is 15 even when quantity avabliable is larger', () => {
    const wrap = mount(
      <SelectProductContainer selectedStyle ={exampleStyleData.results[0]}/>
    );
    wrap.find('select.select-size').simulate('change', { target: { value: 9 }});
    expect(wrap.find('.select-quantity option').length).toEqual(15);
  });
  test('quantityDropDown default becomes 1 when size is first selected ', () => {
    const wrap = mount(
      <SelectProductContainer selectedStyle ={exampleStyleData.results[0]}/>
    );
    wrap.find('select.select-size').simulate('change', { target: { value: 9 }});
    console.log('wrap props', wrap.find('SelectQuantityDropdown').props().sizeAndQuantity.quantity);
    expect(wrap.find('SelectQuantityDropdown').props().sizeAndQuantity.quantity).toEqual(1);

  });
});
describe(' SelectQuantityDropdown ', () => {
  test('quantityDropDown selected quantity to change when quantity is selected', () => {
    const wrap = mount(
      <SelectProductContainer selectedStyle ={exampleStyleData.results[0]}/>
    );
    // wrap.setState({sizeAndQuantity: sAndQ});
    wrap.find('select.select-size').simulate('change', { target: { value: 7 }});
    expect(wrap.find('SelectQuantityDropdown').props().sizeAndQuantity.quantity).toEqual(1);
    wrap.find('select.select-quantity').simulate('change', { target: { value: 4 }});
    expect(wrap.find('SelectQuantityDropdown').props().sizeAndQuantity.quantity).toEqual(4);
  });
});