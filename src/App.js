import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/pages/home/Home'
import About from './components/pages/about/About'
import Contact from './components/pages/contact/Contact'
import Testimonial from './components/pages/testimonial/Testimonial'
import Services from './components/pages/services/Services'



const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/testimonial' element={<Testimonial/>}/>
          <Route path='/services' element={<Services/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App