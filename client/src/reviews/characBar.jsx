import React from 'react';
import styled from 'styled-components';

const CharacBar = (props) => {

  console.log('indicator value', (parseInt(props.value)) / 5 * 100);
  return (
    <CBar>
      <Name>{props.name}</Name>
      <Label value={(parseInt(props.value)) / 5 * 100}></Label>
      <Barwrapper>
        <Bar></Bar>
        <Bar></Bar>
        <Bar></Bar>
      </Barwrapper>
      <Values>
        <Value1>{props.info[0]}</Value1>
        <Value2>{props.info[1]}</Value2>
        <Value3>{props.info[2]}</Value3>
      </Values>

    </CBar>
  );

};

export default CharacBar;


const CBar = styled.div`

`;

const Name = styled.span`

`;
const Label = styled.div`
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-top: 15px solid #383f47;
  position: relative;
  z-index: 1;
  margin-left: ${props => props.value}%;
`;



const Barwrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 0;
  position: relative;
  width: 100%;
`;

const Bar = styled.div`
  display: flex;
  width: 33%;
  height: 12px;
  border-radius: 0;
  background-color: #F2F2F2
`;

const Values = styled.div`
  display: grid;
  width: 100%;
`;


const Value1 = styled.span`
grid-row-start: 1;
grid-row-end: 1;
grid-column-start: 1;
grid-column-end: 1;
text-align: left;
`;

const Value2 = styled.span`
grid-row-start: 1;
grid-row-end: 1;
grid-column-start: 2;
grid-column-end: 2;
text-align: center;
`;

const Value3 = styled.span`
grid-row-start: 1;
grid-row-end: 1;
grid-column-start: 3;
grid-column-end: 3;
text-align: right;
`;