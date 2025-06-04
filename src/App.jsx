import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Feedback from './pages/Feedback';
import './App.css';

// Animated background shapes for all pages
function AnimatedBackground() {
  return (
    <div className="animated-bg">
      <div className="animated-bg-shape red" />
      <div className="animated-bg-shape yellow" />
      <div className="animated-bg-shape orange" />
    </div>
  );
}

// Floating WhatsApp button (global)
function FloatingWhatsApp() {
  return (
    <a
      href="/contact"
      className="floating-whatsapp"
      aria-label="Contact via WhatsApp"
    >
      <span role="img" aria-label="WhatsApp">🟢</span>
    </a>
  );
}

// Scroll-to-top button (global)
function ScrollToTopBtn() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return show ? (
    <button className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to top">
      ↑
    </button>
  ) : null;
}

// Sticky, animated navigation bar with active link highlighting
function Navbar() {
  const location = useLocation();
  // Make logo font size and navbar even smaller
  const [fontSize, setFontSize] = useState('0.8rem');
  useEffect(() => {
    const updateFontSize = () => {
      const rootFont = parseFloat(getComputedStyle(document.documentElement).fontSize);
      // Make logo font size very small relative to root font size (e.g., 0.8x)
      setFontSize(`${rootFont * 0.8}px`);
    };
    updateFontSize();
    window.addEventListener('resize', updateFontSize);
    return () => window.removeEventListener('resize', updateFontSize);
  }, []);
  return (
    <nav className="navbar" style={{ minHeight: '24px', padding: '0.08rem 0.5rem', alignItems: 'center' }}>
      <NavLink to="/" className="logo" style={{ fontSize: '1.1rem', fontWeight: 700, letterSpacing: '1px', padding: 0, color: '#fff', lineHeight: 1, height: 'auto', marginRight: '0.05rem', textDecoration: 'none' }}>ReachFit</NavLink>
      <ul className="nav-links" style={{ gap: '0.7rem', fontSize: '0.75rem', alignItems: 'center', margin: 0, flexWrap: 'wrap' }}>
        <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} end>Home</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
        <li><NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''}>Services</NavLink></li>
        <li><NavLink to="/gallery" className={({ isActive }) => isActive ? 'active' : ''}>Gallery</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
      </ul>
    </nav>
  );
}

// Main App component with advanced features
function App() {
  return (
    <Router>
      <AnimatedBackground />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </main>
      <FloatingWhatsApp />
      <ScrollToTopBtn />
    </Router>
  );
}

export default App;
