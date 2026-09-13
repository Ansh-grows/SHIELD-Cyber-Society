import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import WaveFooter from './components/WaveFooter';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Domains from './pages/Domains';
import Activities from './pages/Activities';
import Projects from './pages/Projects';
import Resources from './pages/Resources';
import Team from './pages/Team';
import JoinUs from './pages/JoinUs';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-shield-darkText font-body">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/domains" element={<Domains />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/team" element={<Team />} />
          <Route path="/join" element={<JoinUs />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <WaveFooter />
    </div>
  );
}
