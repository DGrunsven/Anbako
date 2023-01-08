import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Pages/Home';
import Diensten from './Components/Pages/Diensten';
import Contact from './Components/Pages/Contact';
import OverOns from './Components/Pages/OverOns';
import Footer from './Components/Footer';


function App() {
  return (
    <>
        <Navbar />
        <Home
        title="Home"
        id="home"
        />
        <OverOns
        title="OverOns"
        id="overOns"
        />
        <Diensten
        title="Diensten"
        id="diensten"
        />
        <Contact
        title="Contact"
        id="contact"
        />
        <Footer />
    </>
  );
}

export default App;
