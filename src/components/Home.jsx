import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const projects = [
  { id: "01", title: "Aura Heritage", category: "Legacy Digital Experience", img: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop", color: "var(--accent)", liveLink: "https://koushikdutta01.github.io/aura-heritage" },
  { id: "02", title: "SyntaxType", category: "High-Performance Typing", img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1200&auto=format&fit=crop", color: "var(--accent)", liveLink: "https://koushikdutta01.github.io/syntax-type" },
  { id: "03", title: "Euphoric", category: "Bit-Perfect Audio Player", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop", color: "var(--accent)", liveLink: "#" },
  { id: "04", title: "HabitHeat", category: "Native Habit Tracking", img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1200&auto=format&fit=crop", color: "var(--accent)", liveLink: "https://expo.dev/accounts/koushik01/projects/habit-heat/builds/d0888b2d-834e-4702-a322-f2239b5e4864" }
];

const Hero = ({ onStartProject }) => {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 8vw', paddingTop: '110px', position: 'relative', background: '#000' }}>
      {/* Background Layered Glows */}
      <div className="aura-glow" style={{ top: '5%', left: '10%', width: '40vw', height: '40vw', opacity: 0.15, filter: 'blur(180px)' }} />
      <div className="aura-glow" style={{ bottom: '10%', right: '5%', width: '35vw', height: '35vw', opacity: 0.1, filter: 'blur(150px)', animationDelay: '-5s' }} />
      
      {/* Primary Glowing Glass Architectural Element */}
      <motion.div 
        initial={{ opacity: 0, x: 50, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 2.2, ease: [0.19, 1, 0.22, 1] }}
        style={{
            position: 'absolute',
            top: '15%',
            right: '-5%',
            width: 'clamp(350px, 45vw, 800px)',
            height: 'clamp(450px, 65vh, 900px)',
            background: 'rgba(219, 181, 132, 0.03)',
            backdropFilter: 'blur(60px)',
            WebkitBackdropFilter: 'blur(60px)',
            border: '1px solid rgba(219, 181, 132, 0.12)',
            zIndex: -1,
            borderRadius: '1px'
        }}
      >
        <motion.div 
            animate={{ 
                x: [0, 40, 0],
                y: [0, -40, 0],
                opacity: [0.15, 0.25, 0.15]
            }}
            transition={{ 
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            className="aura-glow" 
            style={{ top: '25%', left: '25%', width: '60%', height: '60%', opacity: 0.2, filter: 'blur(100px)' }} 
        />
      </motion.div>

      <div className="mono" style={{ marginBottom: '2.5rem', color: 'var(--accent)', fontSize: '0.7rem', opacity: 1, letterSpacing: '0.5em' }}>// CREATIVE ENGINEERING // EST. 2026</div>
      
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.8, ease: [0.19, 1, 0.22, 1] }}>
        <h1 className="hero-large" style={{ color: 'var(--fg)', position: 'relative', zIndex: 1 }}>CRAFTING</h1>
        <h1 className="hero-large" style={{ paddingLeft: 'clamp(40px, 15vw, 25vw)', color: 'var(--accent)', fontStyle: 'italic', fontFamily: 'Cormorant Garamond, serif', position: 'relative', zIndex: 1 }}>DIGITAL</h1>
        <h1 className="hero-large" style={{ position: 'relative', zIndex: 1 }}>LEGACIES.</h1>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1.5 }} style={{ marginTop: 'clamp(3rem, 8vh, 5rem)', display: 'flex', flexDirection: 'column', gap: '3.5rem', alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
        <p style={{ maxWidth: '520px', fontSize: 'clamp(1rem, 1.3vw, 1.2rem)', lineHeight: '1.9', opacity: 0.75, fontWeight: 300 }}>
          High-fidelity engineering meets the precision of architectural design. We build digital infrastructure for brands that demand absolute excellence.
        </p>
        <button onClick={onStartProject} className="magnetic-btn" style={{ fontSize: '0.65rem' }}>INITIATE PARTNERSHIP</button>
      </motion.div>

      <div style={{ position: 'absolute', bottom: '8vh', left: '8vw', zIndex: 1 }}>
          <div className="mono" style={{ opacity: 0.5, display: 'flex', gap: '2.5rem', fontSize: '0.65rem' }}>
              <span>22.5726° N</span>
              <span>88.3639° E</span>
          </div>
      </div>
    </section>
  );
};

const MethodSection = () => {
    const values = [
        { num: "01", title: "Harvest", desc: "We extract your brand's core architecture—analyzing sentiment and DNA to build a foundation of objective truth." },
        { num: "02", title: "Synthesize", desc: "Our engine translates raw conceptual data into a bespoke visual language that defines your identity." },
        { num: "03", title: "Evolve", desc: "A continuous design cycle. Your presence is perpetually refactored to remain at the apex of the digital curve." }
    ];

    return (
        <section className="section-v-padding" style={{ borderTop: '1px solid var(--border)', background: 'linear-gradient(to bottom, #000, #030303)' }}>
            <span className="mono" style={{ color: 'var(--accent)', fontSize: '0.7rem', opacity: 0.9 }}>01 // THE ARCHITECTURE</span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '8vw', marginTop: '7rem' }}>
                {values.map((v, i) => (
                    <motion.div key={i} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 60 }} transition={{ duration: 1.2, delay: i * 0.2, ease: [0.19, 1, 0.22, 1] }} viewport={{ once: true }}>
                        <div className="mono" style={{ color: 'var(--accent)', marginBottom: '2.5rem', fontSize: '0.65rem', opacity: 1 }}>{v.num}</div>
                        <h3 style={{ fontSize: '2.8rem', marginBottom: '1.5rem', fontWeight: 300, color: 'var(--fg)' }}>{v.title}</h3>
                        <p style={{ opacity: 0.6, lineHeight: 1.9, fontSize: '1.1rem', fontWeight: 300, maxWidth: '380px' }}>{v.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

const PortfolioSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);
  const springX = useSpring(x, { stiffness: 40, damping: 25, restDelta: 0.001 });

  return (
    <section ref={containerRef} style={{ height: '700vh', position: 'relative', borderTop: '1px solid var(--border)', background: '#000000' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <motion.div style={{ x: springX, display: 'flex', gap: '10vw', paddingLeft: '8vw', width: 'max-content' }}>
          {projects.map((p, i) => (
            <a key={i} href={p.liveLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block', width: '85vw', position: 'relative' }}>
              <div className="img-wrap" style={{ height: '55vh', width: '100%', border: '1px solid var(--border)' }}>
                 <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 2, ease: [0.19, 1, 0.22, 1] }} src={p.img} className="img-inner" alt={p.title} />
                 <div style={{ position: 'absolute', top: '3rem', left: '3rem', mixBlendMode: 'difference' }}>
                    <div className="mono" style={{ opacity: 1, color: 'var(--accent)', fontSize: '0.65rem' }}>{p.id} // CASE STUDY</div>
                 </div>
              </div>
              <div style={{ marginTop: '3.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ textAlign: 'left' }}>
                    <h2 style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', textTransform: 'uppercase', lineHeight: 0.9, fontWeight: 300 }}>{p.title}</h2>
                    <div style={{ marginTop: '1.2rem', display: 'flex', gap: '2rem', alignItems: 'center' }}>
                         <span className="mono" style={{ color: 'var(--accent)', fontSize: '0.75rem', opacity: 1 }}>{p.category}</span>
                         <div style={{ width: '40px', height: '1px', background: 'var(--border)' }} />
                    </div>
                </div>
                <div className="mono" style={{ opacity: 1, borderBottom: `1px solid var(--accent)`, paddingBottom: '10px', color: 'var(--accent)', fontSize: '0.75rem' }}>EXPLORE</div>
              </div>
            </a>
          ))}
          <div style={{ width: '15vw' }} />
        </motion.div>
      </div>
    </section>
  );
};

const MobilePortfolio = () => {
    return (
        <section className="section-v-padding" style={{ borderTop: '1px solid var(--border)' }}>
            <span className="mono" style={{ color: 'var(--accent)', marginBottom: '5rem', display: 'block', fontSize: '0.7rem', opacity: 0.9 }}>02 // SELECTED WORK</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10vh' }}>
                {projects.map((p, i) => (
                    <motion.a 
                        key={i} 
                        href={p.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{ textDecoration: 'none', color: 'inherit' }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
                        viewport={{ once: true, margin: "-10%" }}
                    >
                        <div className="img-wrap" style={{ aspectRatio: '1/1.1', width: '100%', border: '1px solid var(--border)' }}>
                            <img src={p.img} className="img-inner" alt={p.title} style={{ filter: 'grayscale(0%) brightness(0.8)' }} />
                            <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', mixBlendMode: 'difference' }}>
                                <div className="mono" style={{ color: 'var(--accent)', fontSize: '0.55rem' }}>{p.id}</div>
                            </div>
                        </div>
                        <div style={{ marginTop: '2rem' }}>
                            <div className="mono" style={{ color: 'var(--accent)', marginBottom: '1rem', fontSize: '0.65rem', opacity: 1 }}>{p.category}</div>
                            <h2 style={{ fontSize: '3rem', textTransform: 'uppercase', marginBottom: '1.5rem', lineHeight: 1, fontWeight: 300 }}>{p.title}</h2>
                            <div className="mono" style={{ color: 'var(--accent)', borderBottom: '1px solid var(--accent)', display: 'inline-block', paddingBottom: '4px', fontSize: '0.7rem', opacity: 1 }}>EXPLORE CASE STUDY</div>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
};

const Home = ({ onStartProject }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 1024);
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: 'relative', width: '100%' }}>
            <Hero onStartProject={onStartProject} />
            <MethodSection />
            {isMobile ? <MobilePortfolio /> : <PortfolioSection />}
        </motion.div>
    );
};

export default Home;
