import React, {useState} from 'react';



const ProductFeatureList = (props)=> {

  //props
  // console.log('product feature', props.features);

  var list = [];
  if (props.features) {
    list = props.features.map((feature, i) => {
      return <li key={i}>{feature.feature}: {feature.value} </li>;
    });
  }
  return (
    <div>
      {list.length > 1 ?
        <ul id='feature-list'>{list}</ul> :
        <div id='feature-list'>FeatureList</div>}
    </div>
  );
};

export default ProductFeatureList;

/*
 TODO
*/