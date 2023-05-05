import React from 'react';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './sub_pages/Homepage';
import Plans from './sub_pages/Plans';
import Aboutpage from './sub_pages/Aboutus';
import Contactpage from './sub_pages/Contactpage';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/Aboutus' element={<Aboutpage />}/>
        <Route path='/Plans' element={<Plans/>}/>
        <Route path='/Contact' element={<Contactpage/>}/>
        <Route path='/signup' element={<Plans/>}/>
      </Routes>
    </Router>
  )
}
