import React from 'react';
import './styles/style.css';
import ProductCard from './ProductCard.jsx';
import OutfitCard from './OutfitCard.jsx';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);

    //Will probably have to manage info from current product
    this.state = {
      currentProduct: ''
    };
  }


  render() {
    return (
      <div id='relatedProducts'>
        {/* Data mapping will probably happen here for each product card*/}
        {/* Each card will need a unique key */}
        <h2>RelatedProducts</h2>
        <ProductCard />
        <OutfitCard />
      </div>
    );
  }
}

export default RelatedProducts;