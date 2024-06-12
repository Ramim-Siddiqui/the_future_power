import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Root from './Root';
import Home from './Home';
import Contact from './Contact';
import FAQS from './FAQS';
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
