import React from 'react';
import { motion } from 'framer-motion';

const RightArrow = ({ size = 23, fill = '#2fe848' }) => {
  const variants = {
    initial: { width: '23px', height: '23px' },
    animate:
      size === 23
        ? { width: '23px', height: '23px' }
        : { width: size, height: size },
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
