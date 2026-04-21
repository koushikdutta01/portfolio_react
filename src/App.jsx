import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import Home from './components/Home';
import Services from './components/Services';
import ProjectPortal from './components/ProjectPortal';
import './global.css';

const Navbar = ({ onStartProject }) => {
    return (
        <nav style={{ position: 'fixed', top: 0, width: '100%', padding: '1.5rem 5vw', display: 'flex', justifyContent: 'space-between', zIndex: 1000 }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ fontWeight: 800, letterSpacing: '2px', fontSize: '1.2rem', textTransform: 'lowercase' }}>koushik.cloud</div>
            </Link>
            <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="mono" style={{ opacity: 1, cursor: 'pointer' }}>HOME</div>
                </Link>
                <Link to="/services" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="mono" style={{ opacity: 1, cursor: 'pointer' }}>SERVICES</div>
                </Link>
                <button 
                    onClick={onStartProject}
                    className="magnetic-btn" 
                    style={{ padding: '0.6rem 1.5rem', fontSize: '0.7rem' }}
                >
                    START A PROJECT
                </button>
            </div>
        </nav>
    );
};

const AnimatedRoutes = ({ onStartProject }) => {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home onStartProject={onStartProject} />} />
                <Route path="/services" element={<Services />} />
            </Routes>
        </AnimatePresence>
    );
};

function App() {
  const [isPortalOpen, setIsPortalOpen] = React.useState(false);

  return (
    <Router>
        <div className="app-container">
            <CustomCursor />
            <Navbar onStartProject={() => setIsPortalOpen(true)} />
            <ProjectPortal isOpen={isPortalOpen} onClose={() => setIsPortalOpen(false)} />

            <AnimatedRoutes onStartProject={() => setIsPortalOpen(true)} />
            
            <footer style={{ padding: '10vh 5vw', textAlign: 'center', borderTop: '1px solid var(--border)', background: '#030303' }}>
                <span className="mono" style={{ marginBottom: '2rem' }}>WANT TO MAKE HISTORY?</span>
                <h2 style={{ fontSize: '10vw', lineHeight: 0.9 }}>LET'S<br/><span style={{ color: 'var(--accent)' }}>TALK.</span></h2>
                <div style={{ marginTop: '5rem', display: 'flex', gap: '4rem', justifyContent: 'center' }}>
                    <a href="mailto:hello@koushik.cloud" className="mono" style={{ opacity: 1, color: 'inherit', textDecoration: 'none' }}>HELLO@KOUSHIK.CLOUD</a>
                    <a href="https://www.linkedin.com/in/koushik-dutta-4370b718b/" target="_blank" rel="noopener noreferrer" className="mono" style={{ opacity: 1, color: 'inherit', textDecoration: 'none' }}>LINKEDIN</a>
                    <a href="https://github.com/koushikdutta01" target="_blank" rel="noopener noreferrer" className="mono" style={{ opacity: 1, color: 'inherit', textDecoration: 'none' }}>GITHUB</a>
                </div>
                <div style={{ marginTop: '10vh', opacity: 0.2 }} className="mono">© 2026 KOUSHIK — DIGITAL ARTISAN & ENGINEER</div>
            </footer>
        </div>
    </Router>
  );
}

export default App;
