import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Schedule from './pages/Schedule';
import Signup from './pages/Signup';
import Support from './pages/Support';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
