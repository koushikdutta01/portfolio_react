import React, { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.closest('button') || target.closest('a') || target.closest('input') || target.closest('textarea')) {
        setIsHovering(true);
        setCursorText(target.closest('button') || target.closest('a') ? "VIEW" : "EDIT");
      } else {
        setIsHovering(false);
        setCursorText("");
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        x: cursorXSpring,
        y: cursorYSpring,
        pointerEvents: 'none',
        zIndex: 10001, // Higher than the portal
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <motion.div
        animate={{
          width: isHovering ? 80 : 12,
          height: isHovering ? 80 : 12,
          backgroundColor: isHovering ? 'var(--fg)' : 'var(--accent)',
          mixBlendMode: isHovering ? 'difference' : 'normal'
        }}
        style={{
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {isHovering && (
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ color: '#000', fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.1em' }}
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
      
      <motion.div
        animate={{
            scale: isHovering ? 1.5 : 1,
            opacity: isHovering ? 0 : 0.3
        }}
        style={{
            position: 'absolute',
            width: '40px',
            height: '40px',
            border: '1px solid var(--fg)',
            borderRadius: '50%',
        }}
      />
    </motion.div>
  );
};

export default CustomCursor;
