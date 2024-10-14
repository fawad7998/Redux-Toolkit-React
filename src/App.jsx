import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductCart from './AddtoCart/addtocart';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductCart />} />
      </Routes>
    </Router>
  );
};

export default App;
