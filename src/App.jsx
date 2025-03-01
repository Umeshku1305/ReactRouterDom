import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Enquiry from './pages/Enquiry';
import Contact from './pages/Contact';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/enquiry' element={<Enquiry/>}/>
      </Routes>
    </div>
  );
}

export default App;
