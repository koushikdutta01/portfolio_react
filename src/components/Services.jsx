import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Services = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const offerings = [
        { 
            title: "Bespoke Web Design", 
            details: ["Visual Identity", "Immersive Motion", "Digital Couture"],
            desc: "Custom-crafted interfaces that transcend standard layouts. We build high-fidelity digital flagships tailored to your unique brand DNA."
        },
        { 
            title: "Full-Stack Development", 
            details: ["React / Node Ecosystems", "Scalable Architecture", "API Engineering"],
            desc: "Robust, end-to-end applications built for global scale. From architecture to deployment, we ensure absolute technical precision."
        },
        { 
            title: "Autonomous AI Systems", 
            details: ["LLM Integration", "Workflow Synthesis", "Smart Pipelines"],
            desc: "Injecting intelligence into your business. We build custom AI automations that streamline complex operations with zero friction."
        },
        { 
            title: "Native Mobile Engineering", 
            details: ["iOS & Android", "Expo / React Native", "Fluid Interaction"],
            desc: "High-performance mobile apps created to feel alive. We handle every detail, from the first pixel to the final storefront deployment."
        },
        { 
            title: "Evolutionary Maintenance", 
            details: ["Zero-Hassle Upkeep", "Design Refactoring", "Live Optimization"],
            desc: "Continuous growth. We don't just maintain; we refactor your presence as trends evolve, ensuring you are always at the apex of excellence."
        }
    ];

    return (
        <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ padding: isMobile ? '120px 6vw 10vh' : 'clamp(160px, 28vh, 280px) 8vw 15vh', background: '#000000', position: 'relative' }}
        >
            <div className="aura-glow" style={{ top: '5%', left: '0%', width: '800px', height: '800px', opacity: 0.05 }} />

            <div style={{ marginBottom: isMobile ? '5rem' : 'clamp(6rem, 20vh, 18vh)', display: 'flex', flexDirection: 'column', gap: isMobile ? '2.5rem' : '4rem' }}>
                <div>
                    <span className="mono" style={{ color: 'var(--accent)', fontSize: isMobile ? '0.55rem' : '0.7rem', opacity: 0.9 }}>02 // THE SOLUTIONS</span>
                    <h2 style={{ fontSize: isMobile ? '3.8rem' : 'clamp(4rem, 12vw, 9vw)', lineHeight: 0.8, marginTop: isMobile ? '1.5rem' : '3rem', letterSpacing: '-0.04em', color: 'var(--fg)' }}>THE<br/><span style={{ color: 'var(--accent)', fontStyle: 'italic', fontFamily: 'Cormorant Garamond, serif' }}>SERVICES.</span></h2>
                </div>
                <div style={{ maxWidth: '500px' }}>
                    <p style={{ opacity: 0.6, lineHeight: 1.8, fontSize: isMobile ? '0.95rem' : 'clamp(1.05rem, 1.3vw, 1.2rem)', fontWeight: 300 }}>
                        High-fidelity digital infrastructure delivered with absolute technical precision. Engineering legacies for global industry.
                    </p>
                </div>
            </div>

            <div style={{ borderTop: '1px solid var(--border)' }}>
                {offerings.map((o, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ backgroundColor: 'rgba(219, 181, 132, 0.02)' }}
                        viewport={{ once: true }}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: i * 0.15, ease: [0.19, 1, 0.22, 1] }}
                        style={{ 
                            padding: isMobile ? '3.5rem 0' : 'clamp(4rem, 10vh, 6.5rem) 0', 
                            borderBottom: '1px solid var(--border)',
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : 'row',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            gap: isMobile ? '2rem' : '8vw',
                            transition: 'background-color 0.8s ease'
                        }}
                    >
                        <div style={{ flex: 1.4 }}>
                            <div className="mono" style={{ color: 'var(--accent)', marginBottom: isMobile ? '1rem' : '2.5rem', fontSize: isMobile ? '0.5rem' : '0.65rem', opacity: 1 }}>0{i+1} — OFFERING</div>
                            <h3 style={{ fontSize: isMobile ? '2.4rem' : 'clamp(2.8rem, 5vw, 4.5rem)', fontWeight: 300, lineHeight: 1, letterSpacing: '-0.03em', color: 'var(--fg)' }}>{o.title}</h3>
                        </div>
                        <div style={{ flex: 1 }}>
                             <div style={{ display: 'flex', gap: '0.7rem', flexWrap: 'wrap', marginBottom: isMobile ? '1.5rem' : '2.5rem' }}>
                                {o.details.map((d, index) => (
                                    <span key={index} className="mono" style={{ 
                                        border: '1px solid var(--border)', 
                                        padding: '6px 12px', 
                                        opacity: 1, 
                                        color: 'var(--accent)',
                                        fontSize: isMobile ? '0.5rem' : '0.65rem',
                                        background: 'rgba(219, 181, 132, 0.02)'
                                    }}>{d}</span>
                                ))}
                             </div>
                             <p style={{ opacity: 0.5, fontSize: isMobile ? '0.9rem' : 'clamp(1.05rem, 1.3vw, 1.15rem)', lineHeight: 1.8, fontWeight: 300 }}>{o.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Services;
