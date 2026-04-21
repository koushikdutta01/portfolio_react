import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
    const offerings = [
        { 
            title: "Bespoke Web Design", 
            details: ["Visual Identity", "Immersive Motion", "Digital Couture"],
            desc: "Custom-crafted interfaces that transcend standard layouts. We build high-fidelity digital flagships tailored to your unique brand sentiment."
        },
        { 
            title: "Full-Stack Development", 
            details: ["React / Node Ecosystems", "Scalable Backends", "API Architecture"],
            desc: "Robust, end-to-end applications built for global scale. From architecture to deployment, we ensure bulletproof performance."
        },
        { 
            title: "Autonomous AI Agents", 
            details: ["LLM Integration", "Workflow Automation", "Smart Pipelines"],
            desc: "Injecting intelligence into your business. We build custom AI automations that scrape data and streamline operations with zero friction."
        },
        { 
            title: "Native Mobile Engineering", 
            details: ["iOS & Android", "Expo / React Native", "Fluid UX"],
            desc: "High-performance mobile apps created to feel native and alive. We handle everything from the first pixel to the App Store."
        },
        { 
            title: "Evolutionary Maintenance", 
            details: ["Zero-Hassle Upkeep", "Design Refactoring", "Live Optimization"],
            desc: "Continuous growth. We don't just 'maintain' your site; we refactor it as design trends evolve, ensuring you are always at the peak of excellence."
        }
    ];

    return (
        <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ padding: 'clamp(100px, 15vh, 20vh) 5vw 10vh' }}
        >
            <div style={{ marginBottom: '10vh', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div>
                    <span className="mono" style={{ color: 'var(--accent)' }}>02 / SOLUTIONS</span>
                    <h2 style={{ fontSize: 'clamp(3rem, 8vw, 8vw)', lineHeight: 0.9, marginTop: '2rem' }}>THE<br/>SERVICES.</h2>
                </div>
                <div style={{ maxWidth: '400px' }}>
                    <p className="mono" style={{ opacity: 0.5, lineHeight: 1.6 }}>Creating end-to-end digital legacies with zero technical friction for our partners.</p>
                </div>
            </div>

            <div style={{ borderTop: '1px solid var(--border)' }}>
                {offerings.map((o, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
                        style={{ 
                            padding: 'clamp(2rem, 5vh, 4rem) 0', 
                            borderBottom: '1px solid var(--border)',
                            display: 'flex',
                            flexDirection: window.innerWidth < 768 ? 'column' : 'row',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            gap: '2rem'
                        }}
                    >
                        <div style={{ flex: 1 }}>
                            <div className="mono" style={{ color: 'var(--accent)', marginBottom: '1rem' }}>0{i+1} — OFFERING</div>
                            <h3 style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', fontWeight: 400 }}>{o.title}</h3>
                        </div>
                        <div style={{ flex: 1 }}>
                             <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                                {o.details.map((d, index) => (
                                    <span key={index} className="mono" style={{ border: '1px solid var(--border)', padding: '4px 10px', opacity: 0.7, fontSize: '0.6rem' }}>{d}</span>
                                ))}
                             </div>
                             <p style={{ opacity: 0.5, fontSize: 'clamp(1rem, 1.2vw, 1.2rem)', lineHeight: 1.6 }}>{o.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Services;
