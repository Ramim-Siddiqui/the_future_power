import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Root from './Root'
import Home from './Home'
import Contact from './Contact'
import Commercial from './Commercial'
import FAQS from './FAQS'
import Industrial from './Industrial'
import Inverter from './Inverter'
import Netmetering from './Netmetering'
import Residential from './Residential'
import Solarpanels from './Solarpanels'
import Header from './Header'
import Footer from './Footer'
const Routing = () => {
  return (
    <div>
    <Header />
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Root />}></Route>
            <Route exact path='/home' element={<Home />}></Route>
            <Route exact path='/solarpanels' element={<Solarpanels />}></Route>
            <Route exact path='/inverter' element={<Inverter />}></Route>
            <Route exact path='/residential' element={<Residential />}></Route>
            <Route exact path='/commercial' element={<Commercial />}></Route>
            <Route exact path='/industrial' element={<Industrial />}></Route>
            <Route exact path='/netmetering' element={<Netmetering />}></Route>
            <Route exact path='/faqs' element={<FAQS />}></Route>
            <Route exact path='/contact' element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    <Footer />
    </div>
  )
}

export default Routing
