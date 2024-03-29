import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Protected from './components/Protected';
import AboutBrianPage from './routes/AboutBrianPage';
import ClientPortfolioPage from './routes/ClientPortfolioPage';
import ServicesPackagesPage from './routes/ServicesPackagesPage';
import HowItWorksPage from './routes/HowItWorksPage';
import ContactPage from './routes/ContactPage';
import AccountPage from './routes/AccountPage';
import { AuthContextProvider } from './context/AuthContext';

ReactDOM.render(
  <AuthContextProvider>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/aboutbrian' element={<AboutBrianPage />} />
      <Route path='/clientportfolio' element={<ClientPortfolioPage />} />
      <Route path='/servicespackages' element={<ServicesPackagesPage />} />
      <Route path='/howitworks' element={<HowItWorksPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/account' element={<Protected><AccountPage /></Protected>} />
    </Routes>
  </BrowserRouter>
  </AuthContextProvider>,
  document.getElementById('root')
);



