//show and handle the rating bars

//special funciton: clicking the breakdown for a star count will filter the review list
//may need to create a seprate helper component, in order to communicate with and filter review list
//it will be passed to widget top level component

import React from 'react';
import './styles/style.css';
import styled from 'styled-components';

const RatingBar = (props) => {
  //let percent = {'--percentV': props.percent};
  return (
    <Bar percent = {props.percent} empty = {100 - props.percent}>
      <Filled percent = {props.percent}> </Filled>
      <Empty empty = {props.empty} ></Empty>
    </Bar>
  );
};

const Bar = styled.div`
  border-radius: 0;
  height: 1rem;
  flex-basis: 45%;
  border: 1px solid;
  display: flex;
`;

const Filled = styled.div`
  border-radius: 0;
  height: 99%;
  width: ${props => props.percent}%;
  background: #fc0 ;
`;

const Empty = styled.div`
  border-radius: 0;
  display: inline;
  height: 99%;
  width: ${props => props.empty}%;
  background: #eee;
`;
export default RatingBar;