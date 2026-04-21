import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Lenis from 'lenis';
import CustomCursor from './components/CustomCursor';
import Home from './components/Home';
import Services from './components/Services';
import ProjectPortal from './components/ProjectPortal';
import './global.css';

const Navbar = ({ onStartProject }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const navLinks = [
        { name: "HOME", path: "/" },
        { name: "SERVICES", path: "/services" }
    ];

    return (
        <>
            <nav style={{ 
                position: 'fixed', top: 0, width: '100%', 
                padding: isMobile ? '1.5rem 6vw' : '2.5rem 8vw', 
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                zIndex: 2000,
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, transparent 100%)',
                backdropFilter: 'blur(15px)'
            }}>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }} onClick={() => setIsMenuOpen(false)}>
                    <div style={{ fontWeight: 400, letterSpacing: isMobile ? '3px' : '5px', fontSize: isMobile ? '0.9rem' : '1.1rem', textTransform: 'uppercase', color: 'var(--accent)', fontFamily: 'Source Code Pro, monospace' }}>koushik.cloud</div>
                </Link>

                {!isMobile ? (
                    <div style={{ display: 'flex', gap: '4.5rem', alignItems: 'center' }}>
                        {navLinks.map(link => (
                            <Link key={link.path} to={link.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <motion.div 
                                    whileHover={{ color: 'var(--accent)', letterSpacing: '0.6em' }}
                                    className="mono" 
                                    style={{ opacity: 1, cursor: 'pointer', transition: 'all 0.6s cubic-bezier(0.19, 1, 0.22, 1)', fontSize: '0.6rem' }}
                                >
                                    {link.name}
                                </motion.div>
                            </Link>
                        ))}
                        <button onClick={onStartProject} className="magnetic-btn" style={{ padding: '0.7rem 2.2rem', fontSize: '0.55rem' }}>START A PROJECT</button>
                    </div>
                ) : (
                    <div onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ cursor: 'pointer', padding: '10px', display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
                        <motion.div animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 4.5 : 0, width: 28, backgroundColor: isMenuOpen ? 'var(--accent)' : 'var(--fg)' }} style={{ width: '28px', height: '1.2px' }} />
                        <motion.div animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -4.5 : 0, width: 28, backgroundColor: isMenuOpen ? 'var(--accent)' : 'var(--fg)' }} style={{ width: '28px', height: '1.2px' }} />
                    </div>
                )}
            </nav>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                        style={{
                            position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh',
                            background: '#000000', zIndex: 1900,
                            display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '10vw'
                        }}
                    >
                        <div className="aura-glow" style={{ top: '10%', right: '10%', width: '400px', height: '400px', opacity: 0.08 }} />
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                            <div className="mono" style={{ color: 'var(--accent)', opacity: 1, marginBottom: '1rem', fontSize: '0.6rem', letterSpacing: '0.5em' }}>INDEX // 01</div>
                            {navLinks.map((link, i) => (
                                <motion.div key={link.path} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 + i * 0.1 }}>
                                    <Link 
                                        to={link.path} 
                                        onClick={() => setIsMenuOpen(false)} 
                                        style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'baseline', gap: '1.5rem' }}
                                    >
                                        <span className="mono" style={{ fontSize: '0.6rem', color: 'var(--accent)', opacity: 0.5 }}>0{i+1}</span>
                                        <motion.span 
                                            whileHover={{ x: 20, color: 'var(--accent)' }}
                                            whileTap={{ scale: 0.95 }}
                                            style={{ 
                                                fontSize: 'clamp(2.5rem, 12vw, 4.5rem)', 
                                                fontFamily: 'Cormorant Garamond, serif', 
                                                lineHeight: 1, 
                                                letterSpacing: '-0.02em',
                                                transition: 'color 0.4s ease'
                                            }}
                                        >
                                            {link.name}
                                        </motion.span>
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
                                <button 
                                    onClick={() => { setIsMenuOpen(false); onStartProject(); }} 
                                    className="magnetic-btn" 
                                    style={{ marginTop: '2.5rem', width: '100%', fontSize: '0.6rem', border: '1px solid var(--accent)', color: 'var(--accent)' }}
                                >
                                    INITIATE CONCEPT
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

const Layout = ({ children }) => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);
    const { pathname } = useLocation();
    const lenisRef = useRef(null);
    
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });
        lenisRef.current = lenis;

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        const check = () => setIsDesktop(window.innerWidth > 1024);
        window.addEventListener('resize', check);
        return () => {
            lenis.destroy();
            window.removeEventListener('resize', check);
        };
    }, []);

    useEffect(() => {
        if (lenisRef.current) {
            lenisRef.current.scrollTo(0, { immediate: true });
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname]);

    return (
        <>
            {isDesktop && <CustomCursor />}
            {children}
        </>
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
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  return (
    <Router>
        <Layout>
            <Navbar onStartProject={() => setIsPortalOpen(true)} />
            <ProjectPortal isOpen={isPortalOpen} onClose={() => setIsPortalOpen(false)} />
            <AnimatedRoutes onStartProject={() => setIsPortalOpen(true)} />
            
            <footer style={{ padding: 'var(--section-padding) 8vw', background: '#000000', borderTop: '1px solid var(--border)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 768 ? '1.5fr 1fr' : '1fr', gap: '6rem', alignItems: 'end' }}>
                    <div>
                        <span className="mono" style={{ color: 'var(--accent)', display: 'block', marginBottom: '3rem', fontSize: '0.6rem', opacity: 1 }}>LET'S MAKE HISTORY</span>
                        <h2 style={{ fontSize: 'clamp(3.5rem, 10vw, 12vw)', lineHeight: 0.75, textTransform: 'uppercase', letterSpacing: '-0.05em', fontWeight: 300 }}>LET'S<br/><span style={{ color: 'var(--accent)', fontStyle: 'italic', fontFamily: 'Cormorant Garamond, serif' }}>TALK.</span></h2>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: window.innerWidth > 768 ? 'flex-end' : 'flex-start' }}>
                        <a href="mailto:hello@koushik.cloud" className="mono" style={{ color: 'var(--accent)', textDecoration: 'none', opacity: 1, fontSize: '0.75rem', letterSpacing: '0.3em' }}>hello@koushik.cloud</a>
                        <div style={{ display: 'flex', gap: '2.5rem' }}>
                            <a href="https://www.linkedin.com/in/koushik-dutta-4370b718b/" target="_blank" className="mono" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.4, fontSize: '0.55rem' }}>LinkedIn</a>
                            <a href="https://github.com/koushikdutta01" target="_blank" className="mono" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.4, fontSize: '0.55rem' }}>GitHub</a>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: '12rem', borderTop: '1px solid var(--border)', paddingTop: '3rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
                    <div className="mono" style={{ opacity: 0.25, fontSize: '0.55rem' }}>© 2026 KOUSHIK.CLOUD — ALL RIGHTS RESERVED</div>
                    <div className="mono" style={{ opacity: 0.25, fontSize: '0.55rem' }}>KOLKATA — GLOBAL [ 22.5726° N, 88.3639° E ]</div>
                </div>
            </footer>
        </Layout>
    </Router>
  );
}

export default App;
