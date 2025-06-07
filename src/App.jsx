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
      href="https://wa.me/919999999999" // Replace with your WhatsApp number
      className="floating-whatsapp"
      aria-label="Contact via WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
      style={{ background: '#25d366', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', width: '60px', height: '60px', boxShadow: '0 4px 24px rgba(37,211,102,0.18)' }}
    >
      <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg" alt="WhatsApp" style={{ width: '32px', height: '32px' }} />
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
  const [fontSize, setFontSize] = useState('0.8rem');
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const updateFontSize = () => {
      const rootFont = parseFloat(getComputedStyle(document.documentElement).fontSize);
      setFontSize(`${rootFont * 0.8}px`);
    };
    updateFontSize();
    window.addEventListener('resize', updateFontSize);
    return () => window.removeEventListener('resize', updateFontSize);
  }, []);
  useEffect(() => { setMenuOpen(false); }, [location]);
  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">ReachFit</NavLink>
      <button
        className={`navbar-hamburger${menuOpen ? ' open' : ''}`}
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        aria-controls="navbar-menu"
        onClick={() => setMenuOpen(m => !m)}
      >
        <span className="hamburger-bar" />
        <span className="hamburger-bar" />
        <span className="hamburger-bar" />
      </button>
      <ul
        className={`nav-links${menuOpen ? ' nav-open' : ''}`}
        id="navbar-menu"
      >
        <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} end>Home</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
        <li><NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''}>Services</NavLink></li>
        <li><NavLink to="/gallery" className={({ isActive }) => isActive ? 'active' : ''}>Gallery</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
        <li><NavLink to="/feedback" className={({ isActive }) => isActive ? 'active' : ''}>Feedback</NavLink></li>
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
      <main style={{ paddingBottom: '64px' }}>
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
      {/* Bottom navigation links for mobile removed as per user request */}
    </Router>
  );
}

export default App;
