import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Root from './Root';
import Home from './Home';
import Contact from './Contact';
import Commercial from './Commercial';
import FAQS from './FAQS';
import Industrial from './Industrial';
import Inverter from './Inverter';
import Netmetering from './Netmetering';
import Residential from './Residential';
import Solarpanels from './Solarpanels';
import Header from './Header';
import Footer from './Footer';
import Products from './Products';
import Solutions from './Solutions';

const Routing = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Root />} />
        <Route path='/home' element={<Home />} />
        <Route path='/solarpanels' element={<Solarpanels />} />
        <Route path='/inverter' element={<Inverter />} />
        <Route path='/residential' element={<Residential />} />
        <Route path='/commercial' element={<Commercial />} />
        <Route path='/industrial' element={<Industrial />} />
        <Route path='/netmetering' element={<Netmetering />} />
        <Route path='/products' element={<Products />} />
        <Route path='/faqs' element={<FAQS />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/solutions' element={<Solutions />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Routing;
