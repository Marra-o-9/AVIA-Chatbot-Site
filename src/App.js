// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Functions from './pages/Functions';
import Services from './pages/Services';
import Signup from './pages/Signup';
import Support from './pages/Support';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/functions" element={<Functions />} />
        <Route path="/services" element={<Services />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;