import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import App from './app.jsx';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('app'));

// const rootElement = document.getElementById('app');

// render (
//   <BrowserRouter>
//     <Routes>
//       <Route path="/product/:product_id" element={<App />} />
//     </Routes>
//   </BrowserRouter>,
//   rootElement
// );