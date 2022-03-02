import React from 'react';
import axios from 'axios';

// CHANGE REQUEST - Higher Order Component that handles click on element and sends metadata to Atelier Interactions API
const withInteractions = (WrappedComponent, widget) => {
  return function withInteractionsComponent(props) {
    
    const handleClickTracking = (event) => {
      event.preventDefault();
      console.log('element', event.target.outerHTML);
      console.log('widget', widget);
      console.log('time', Date.now());
  
      const bodyParams = {
        element: event.target.outerHTML,
        widget: widget,
        time: Date.now().toString()
      };

      axios.post('/api/interactions', bodyParams)
        .then((response) => {
          console.log('SUCCESS sending click tracker interaction to API: ', response);
        })
        .catch((error) => {
          console.log('ERROR sending click tracker interaction to API', error);
        });
    };
  
    return (
      <WrappedComponent interactions={handleClickTracking} {...props} />
    );
  };

};

export default withInteractions;
