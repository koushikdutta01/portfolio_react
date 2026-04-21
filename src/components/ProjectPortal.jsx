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
                        backgroundColor: 'rgba(3, 3, 3, 0.98)', backdropFilter: 'blur(20px)', zIndex: 10000,
                        padding: '2rem'
                    }}
                >
                    <div style={{ textAlign: 'center' }}>
                         <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>THANK YOU FOR CONNECTING.</h2>
                         <p style={{ opacity: 0.5, marginTop: '1.5rem', maxWidth: '500px', margin: '1.5rem auto', fontSize: '1rem' }}>
                            Your inquiry has been received. Our team will reach out to you as soon as possible to discuss your vision.
                         </p>
                         <button onClick={() => { onClose(); setStep(1); }} className="magnetic-btn" style={{ marginTop: '2rem' }}>RETURN HOME</button>
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
            backgroundColor: 'rgba(3, 3, 3, 0.98)', backdropFilter: 'blur(20px)',
            zIndex: 10000, display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', padding: '2rem'
          }}
        >
          <motion.div onClick={onClose} style={{ position: 'absolute', top: '2rem', right: '5vw', cursor: 'pointer' }} className="mono">
            [ CLOSE ]
          </motion.div>

          <div style={{ maxWidth: '600px', width: '100%' }}>
            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <div className="mono" style={{ color: 'var(--accent)', marginBottom: '1rem' }}>01 / IDENTIFICATION</div>
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '2rem' }}>WHO ARE YOU?</h2>
                    <input 
                      autoFocus 
                      name="name" 
                      placeholder="Name or Brand" 
                      required 
                      onKeyDown={(e) => handleKeyDown(e, 1)}
                      style={inputStyle} 
                    />
                    <button type="button" onClick={nextStep} className="magnetic-btn" style={{ marginTop: '2rem' }}>NEXT</button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <div className="mono" style={{ color: 'var(--accent)', marginBottom: '1rem' }}>02 / CONNECTION</div>
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '2rem' }}>WHERE TO REACH?</h2>
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
                    <button type="button" onClick={nextStep} className="magnetic-btn" style={{ marginTop: '2rem' }}>NEXT</button>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <div className="mono" style={{ color: 'var(--accent)', marginBottom: '1rem' }}>03 / DIRECT LINE</div>
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '2rem' }}>PHONE NUMBER?</h2>
                    <input 
                      autoFocus 
                      type="tel" 
                      name="phone" 
                      placeholder="+1 (555) 000-0000" 
                      onKeyDown={(e) => handleKeyDown(e, 3)}
                      style={inputStyle} 
                    />
                    <button type="button" onClick={nextStep} className="magnetic-btn" style={{ marginTop: '2rem' }}>NEXT</button>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <div className="mono" style={{ color: 'var(--accent)', marginBottom: '1rem' }}>04 / AMBITION</div>
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '2rem' }}>WHAT'S THE GOAL?</h2>
                    <textarea 
                      autoFocus 
                      name="message" 
                      placeholder="Briefly describe your vision..." 
                      required 
                      style={{...inputStyle, textAlign: 'left', minHeight: '150px', fontSize: '1.2rem'}} 
                    />
                    <button type="submit" disabled={state.submitting} className="magnetic-btn" style={{ marginTop: '2rem' }}>
                        {state.submitting ? "INITIATING..." : "INITIATE SYNTHESIS"}
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
  padding: '1rem 0',
  fontSize: 'clamp(1.5rem, 4vw, 2rem)',
  color: 'var(--fg)',
  fontFamily: 'inherit',
  outline: 'none',
  transition: 'border-color 0.3s ease'
};

export default ProjectPortal;
