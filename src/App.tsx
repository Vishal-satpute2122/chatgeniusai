import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from './Create/Create';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />          
          <Route path='/create' element={<Create />} />          
      </Routes>
    </BrowserRouter>
  );
}

export default App;
