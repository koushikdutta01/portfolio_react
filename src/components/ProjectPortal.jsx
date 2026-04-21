import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';

const ProjectPortal = ({ isOpen, onClose }) => {
  const [state, handleSubmit] = useForm("xnqydkvn");
  const [step, setStep] = useState(1);

  const nextStep = (e) => {
    if (e) e.preventDefault();
    setStep(prev => prev + 1);
  };

  const handleKeyDown = (e, currentStep) => {
    if (e.key === 'Enter') {
      if (currentStep < 4) {
        e.preventDefault();
        nextStep();
      }
    }
  };

  if (state.succeeded) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex-center"
                    style={{
                        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
                        backgroundColor: '#000000', backdropFilter: 'blur(30px)', zIndex: 10000,
                        padding: '2rem'
                    }}
                >
                    <div className="aura-glow" style={{ top: '20%', left: '20%', width: '600px', height: '600px', opacity: 0.1 }} />
                    <div style={{ textAlign: 'center' }}>
                         <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.05em', color: 'var(--fg)' }}>INITIATION COMPLETE.</h2>
                         <p className="mono" style={{ color: 'var(--accent)', marginTop: '2.5rem', maxWidth: '600px', margin: '2.5rem auto', fontSize: '0.8rem', opacity: 1 }}>
                            Your digital signature has been recorded. We will contact you shortly to begin the conceptual synthesis.
                         </p>
                         <button onClick={() => { onClose(); setStep(1); }} className="magnetic-btn" style={{ marginTop: '4rem' }}>RETURN TO VOID</button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.98)', backdropFilter: 'blur(40px)',
            zIndex: 10000, display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', padding: '2rem'
          }}
        >
          <div className="aura-glow" style={{ top: '10%', right: '10%', width: '500px', height: '500px', opacity: 0.05 }} />
          
          <motion.div 
            onClick={onClose} 
            whileHover={{ color: 'var(--accent)', letterSpacing: '0.5em' }}
            style={{ position: 'absolute', top: '4rem', right: '8vw', cursor: 'pointer', transition: 'all 0.5s ease' }} 
            className="mono"
          >
            [ CLOSE / ESC ]
          </motion.div>

          <div style={{ maxWidth: '900px', width: '100%' }}>
            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div key="step1" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}>
                    <div className="mono" style={{ color: 'var(--accent)', marginBottom: '2rem' }}>01 // IDENTIFICATION</div>
                    <h2 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: '4rem', lineHeight: 0.9, color: 'var(--fg)' }}>WHO IS THE<br/><span style={{ color: 'var(--accent)', fontStyle: 'italic', fontFamily: 'Cormorant Garamond, serif' }}>PARTNER?</span></h2>
                    <input 
                      autoFocus 
                      name="name" 
                      placeholder="Individual or Brand Name" 
                      required 
                      onKeyDown={(e) => handleKeyDown(e, 1)}
                      style={inputStyle} 
                    />
                    <button type="button" onClick={nextStep} className="magnetic-btn" style={{ marginTop: '5rem' }}>CONTINUE</button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div key="step2" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}>
                    <div className="mono" style={{ color: 'var(--accent)', marginBottom: '2rem' }}>02 // CONNECTION</div>
                    <h2 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: '4rem', lineHeight: 0.9, color: 'var(--fg)' }}>WHERE DO WE<br/><span style={{ color: 'var(--accent)', fontStyle: 'italic', fontFamily: 'Cormorant Garamond, serif' }}>RESPOND?</span></h2>
                    <input 
                      autoFocus 
                      id="email"
                      type="email" 
                      name="email" 
                      placeholder="email@example.com" 
                      required 
                      onKeyDown={(e) => handleKeyDown(e, 2)}
                      style={inputStyle} 
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                    <button type="button" onClick={nextStep} className="magnetic-btn" style={{ marginTop: '5rem' }}>CONTINUE</button>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div key="step3" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}>
                    <div className="mono" style={{ color: 'var(--accent)', marginBottom: '2rem' }}>03 // DIRECT LINE</div>
                    <h2 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: '4rem', lineHeight: 0.9, color: 'var(--fg)' }}>A SECURE<br/><span style={{ color: 'var(--accent)', fontStyle: 'italic', fontFamily: 'Cormorant Garamond, serif' }}>NUMBER?</span></h2>
                    <input 
                      autoFocus 
                      type="tel" 
                      name="phone" 
                      placeholder="+00 (000) 000-0000" 
                      onKeyDown={(e) => handleKeyDown(e, 3)}
                      style={inputStyle} 
                    />
                    <button type="button" onClick={nextStep} className="magnetic-btn" style={{ marginTop: '5rem' }}>CONTINUE</button>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div key="step4" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}>
                    <div className="mono" style={{ color: 'var(--accent)', marginBottom: '2rem' }}>04 // AMBITION</div>
                    <h2 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: '4rem', lineHeight: 0.9, color: 'var(--fg)' }}>WHAT IS THE<br/><span style={{ color: 'var(--accent)', fontStyle: 'italic', fontFamily: 'Cormorant Garamond, serif' }}>OBJECTIVE?</span></h2>
                    <textarea 
                      autoFocus 
                      name="message" 
                      placeholder="Briefly describe the vision..." 
                      required 
                      style={{...inputStyle, textAlign: 'left', minHeight: '100px', fontSize: '1.4rem'}} 
                    />
                    <button type="submit" disabled={state.submitting} className="magnetic-btn" style={{ marginTop: '5rem' }}>
                        {state.submitting ? "UPLOADING..." : "INITIATE SYNTHESIS"}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const inputStyle = {
  width: '100%',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid var(--border)',
  padding: '2rem 0',
  fontSize: 'clamp(1.5rem, 4vw, 3rem)',
  color: 'var(--fg)',
  fontFamily: 'inherit',
  outline: 'none',
  transition: 'border-color 0.6s cubic-bezier(0.19, 1, 0.22, 1)',
  borderRadius: 0,
  fontWeight: 200
};

export default ProjectPortal;
