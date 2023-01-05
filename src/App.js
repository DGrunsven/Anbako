import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Pages/Home';
import Diensten from './Components/Pages/Diensten';
import Contact from './Components/Pages/Contact';
import OverOns from './Components/Pages/OverOns';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/diensten' element={<Diensten />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/overOns' element={<OverOns />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
