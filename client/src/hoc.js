
import React, { useState, useEffect } from 'react';
import {useParams, useNavigate} from 'react-router-dom';

//this wrapper component gives our class component useParams functionality
var withParamsAndNavigate = function(Component) {
  return props => <Component {...props} params = {useParams()} navigate={useNavigate()} />;
};
export default withParamsAndNavigate;