import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import Patients from './pages/Patients';
import Pharmacy from './pages/Pharmacy';
import Blog from './pages/Blog';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/doctors" element={<Doctors />} />
          <Route path="/Patients" element={<Patients />} />
          <Route path="/pharmacy" element={<Pharmacy />} />
          <Route path="/blog" element={<Blog />} />


      </Routes>
    </BrowserRouter>
    

  );
}

export default App;