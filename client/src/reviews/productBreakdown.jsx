import React from 'react';
import CharacBar from './characBar.jsx';

const ProductBreakdown = (props) => {
  let characteristics = [];
  for (let key in props.charac) {
    //characteristics.push({`${key}: ${props.charac[key]}`})
    let breakdown = props.charac;
    characteristics.push({name: `${key}`, id: breakdown[key]['id'], value: breakdown[key]['value']});

  }

  let info = {
    Size: ['too small', 'perfect', 'too wide'],
    Width: ['too narrow', 'perfect', 'too wide'],
    Comfort: ['uncomfortable', 'ok', 'perfect'],
    Quality: ['poor', 'as expected', 'perfect'],
    Length: ['runs short', 'perfect', 'runs long'],
    Fit: ['runs tight', 'perfect', 'runs long']
  };
  //console.log('characteristics', characteristics[0]);
  //render size, width, comfort, quality, length and fit factor bar

  return (
    <div>
      {characteristics.map((characteristic) => {
        return (
          <CharacBar key ={characteristic.id} name = {characteristic.name} value = {characteristic.value} info = {info[characteristic.name]}/>
        );
      })}
    </div>
  );

};

export default ProductBreakdown;