import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';

var withParams = function(Component) {
  return props => <Component {...props} params = {useParams()} />;
};
export default withParams;