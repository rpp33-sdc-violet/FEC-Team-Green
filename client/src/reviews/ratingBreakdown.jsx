//show and handle the rating bars

//special funciton: clicking the breakdown for a star count will filter the review list
//may need to create a seprate helper component, in order to communicate with and filter review list
//it will be passed to widget top level component

import React from 'react';
import styled from 'styled-components';

const RatingBar = (props) => {

  let ratingBar =
  <Bar percent = {props.percent} empty = {100 - props.percent}>
    <Filled percent = {props.percent}> </Filled>
    <Empty empty = {props.empty} ></Empty>
  </Bar>;

  return (
    //TODO:implement onClick event handler in BarWrapper to fullfill the requirement 'label, bar and the count will act as a filter
    <BarWrapper onClick = {() => { props.filters(props.stars); }}>
      <BarTitle>{props.stars} stars</BarTitle>
      {ratingBar}
    </BarWrapper>

  );
};

const BarWrapper = styled.div``;

const BarTitle = styled.div``;

const Bar = styled.div`
  border-radius: 0;
  height: 12px;
  border: 1px solid;
  display: flex;
  &:hover {
    background-color: #F2F2F2;
  }
`;

const Filled = styled.div`
  border-radius: 0;
  height: 99%;
  width: ${props => props.percent}%;
  background: #383f47 ;
`;

const Empty = styled.div`
  border-radius: 0;
  display: inline;
  height: 99%;
  width: ${props => props.empty}%;
  background: #eee;
`;
export default RatingBar;