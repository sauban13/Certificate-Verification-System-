import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GetCertificate from './pages/GetCertificate';
import DownloadCertificate from './pages/DownloadCertificate';
import VerifyCertificate from './pages/VerifyCertificate';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-certificate" element={<GetCertificate />} />
        <Route path="/download-certificate" element={<DownloadCertificate />} />
        <Route path="/verify-certificate" element={<VerifyCertificate />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
