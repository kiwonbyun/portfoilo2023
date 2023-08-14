import React, { ReactElement, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface RevealProps {
  children: ReactElement | ReactElement[];
  width?: 'fit-content' | '100%';
}
const variants = {
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0 },
};
const slideVariants = {
  hidden: { left: 0 },
  visible: { left: '100%' },
};
const transition = {
  duration: 0.5,
  delay: 0.2,
};
const slideTransition = {
  duration: 0.6,
  ease: 'easeIn',
};

const Reveal = ({ children, width = 'fit-content' }: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControl = useAnimation();
  const slideControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControl.start('visible');
      slideControl.start('visible');
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={mainControl}
        transition={transition}>
        {children}
      </motion.div>
      <motion.div
        variants={slideVariants}
        initial="hidden"
        animate={slideControl}
        transition={slideTransition}
        style={{
          position: 'absolute',
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          zIndex: 20,
          background: '#2fe848',
        }}
      />
    </div>
  );
};

export default Reveal;
