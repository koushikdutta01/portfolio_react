import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
  { 
    id: "01", 
    title: "Aura Heritage", 
    category: "Legacy Digital Experience", 
    img: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop", 
    color: "#D4AF37",
    liveLink: "https://koushikdutta01.github.io/aura-heritage" 
  },
  { 
    id: "02", 
    title: "SyntaxType", 
    category: "High-Performance Typing", 
    img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1200&auto=format&fit=crop", 
    color: "#03C988",
    liveLink: "https://koushikdutta01.github.io/syntax-type" 
  },
  { 
    id: "03", 
    title: "Euphoric", 
    category: "Bit-Perfect Audio Player", 
    img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop", 
    color: "#FF3B3F",
    liveLink: "#" 
  },
  { 
    id: "04", 
    title: "HabitHeat", 
    category: "Native Habit Tracking", 
    img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1200&auto=format&fit=crop", 
    color: "#6A0572",
    liveLink: "https://expo.dev/accounts/koushik01/projects/habit-heat/builds/d0888b2d-834e-4702-a322-f2239b5e4864" 
  }
];

const Hero = ({ onStartProject }) => {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '120px 5vw 60px', position: 'relative' }}>
      <div className="mono" style={{ marginBottom: '2rem' }}>Independent Digital Studio — Est. 2026</div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="hero-large">CRAFTING</h1>
        <h1 className="hero-large" style={{ paddingLeft: 'clamp(0px, 10vw, 15vw)' }}>
          <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>DIGITAL</span> LEGACIES.
        </h1>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        style={{ marginTop: 'clamp(2rem, 8vh, 5rem)', display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'flex-start' }}
      >
        <p style={{ maxWidth: '450px', fontSize: 'clamp(1rem, 1.2vw, 1.2rem)', lineHeight: '1.6', opacity: 0.6 }}>
          We bridge the gap between technical complexity and artistic soul. Building high-fidelity interfaces for the next generation of global brands.
        </p>
        <button onClick={onStartProject} className="magnetic-btn">START A PROJECT</button>
      </motion.div>

      <div style={{ position: 'absolute', top: '15%', right: '10%', width: 'clamp(200px, 40vw, 400px)', height: 'clamp(200px, 40vw, 400px)', borderRadius: '50%', background: 'var(--accent)', filter: 'blur(100px)', opacity: 0.1, zIndex: -1 }} />
    </section>
  );
};

const MethodSection = () => {
    const values = [
        { num: "01", title: "Harvest", desc: "We scrape your brand's digital soul—reviews, sentiment, and aesthetics—to build a foundation of truth." },
        { num: "02", title: "Synthesize", desc: "Our engine translates raw data into a custom visual language that is unique to your identity." },
        { num: "03", title: "Evolve", desc: "Websites that live. Continuous design refactoring ensures your presence never falls behind the curve." }
    ];

    return (
        <section style={{ padding: '10vh 5vw', borderTop: '1px solid var(--border)' }}>
            <span className="mono" style={{ color: 'var(--accent)' }}>OUR METHODOLOGY</span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', marginTop: '4rem' }}>
                {values.map((v, i) => (
                    <motion.div 
                        key={i}
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 30 }}
                        transition={{ delay: i * 0.2 }}
                    >
                        <div className="mono" style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}>{v.num}</div>
                        <h3 style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', marginBottom: '1.5rem', fontWeight: 400 }}>{v.title}</h3>
                        <p style={{ opacity: 0.5, lineHeight: 1.6, fontSize: '1.1rem' }}>{v.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

const PortfolioSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  const renderProject = (p, i) => (
    <a 
      key={i} 
      href={p.liveLink} 
      target="_blank" 
      rel="noopener noreferrer" 
      style={{ textDecoration: 'none', color: 'inherit', display: 'block', width: isMobile ? '100%' : '70vw', position: 'relative' }}
    >
      <div className="img-wrap" style={{ height: isMobile ? 'auto' : '60vh', width: '100%', aspectRatio: isMobile ? '4/3' : 'auto' }}>
         <motion.img 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1 }}
            src={p.img} 
            className="img-inner" 
            alt={p.title} 
         />
         <div style={{ position: 'absolute', top: '2rem', left: '2rem', mixBlendMode: 'difference' }}>
            <div className="mono">{p.id} / PROJECT</div>
         </div>
      </div>
      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', textTransform: 'uppercase' }}>{p.title}</h2>
            <span className="mono" style={{ color: p.color, opacity: 1 }}>{p.category}</span>
        </div>
        <div className="mono" style={{ opacity: 1, borderBottom: `1px solid ${p.color}`, paddingBottom: '4px' }}>VIEW LIVE</div>
      </div>
    </a>
  );

  if (isMobile) {
    return (
      <section style={{ padding: '10vh 5vw' }}>
         <span className="mono" style={{ color: 'var(--accent)', display: 'block', marginBottom: '4rem' }}>SELECTED WORK</span>
         <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {projects.map((p, i) => renderProject(p, i))}
         </div>
      </section>
    );
  }

  return (
    <div ref={targetRef} style={{ height: '400vh', position: 'relative' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <motion.div style={{ x, display: 'flex', gap: '5vw', paddingLeft: '5vw' }}>
          {projects.map((p, i) => renderProject(p, i))}
        </motion.div>
      </div>
    </div>
  );
};

const Home = ({ onStartProject }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Hero onStartProject={onStartProject} />
            <MethodSection />
            <PortfolioSection />
        </motion.div>
    );
};

export default Home;
