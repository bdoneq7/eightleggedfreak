import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import AboutBrianPage from './routes/AboutBrianPage';
import PortfolioPage from './routes/PortfolioPage';
import ServicesPage from './routes/ServicesPage';
import ContactPage from './routes/ContactPage';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/aboutbrian' element={<AboutBrianPage />} />
      <Route path='/portfolio' element={<PortfolioPage />} />
      <Route path='/services' element={<ServicesPage />} />
      <Route path='/contact' element={<ContactPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);



