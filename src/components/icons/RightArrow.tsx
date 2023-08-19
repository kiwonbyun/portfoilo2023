import React from 'react';
import { motion } from 'framer-motion';

const RightArrow = ({ size = 23, fill = '#2fe848' }) => {
  const variants = {
    initial: {
      width: 'var(--font-size-semi-sm)',
      height: 'var(--font-size-semi-sm)',
    },
    animate:
      size === 23
        ? {
            width: 'var(--font-size-semi-sm)',
            height: 'var(--font-size-semi-sm)',
          }
        : { width: 'var(--font-size-lg)', height: 'var(--font-size-lg)' },
  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      variants={variants}
      initial="initial"
      animate="animate"
      // width={size}
      // height={size}
      fill={fill}
      viewBox="0 0 19.99 18">
      <polygon points="10.029 5 0 5 0 12.967 10.029 12.967 10.029 18 19.99 8.952 10.029 0 10.029 5" />
    </motion.svg>
  );
};

export default RightArrow;
