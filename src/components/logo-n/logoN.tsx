import React from 'react';
import { motion, Variants } from 'framer-motion';

export const LogoN: React.FC = () => {
  const variants: Variants = {
    hidden: {
      pathLength: 0,
      fill: 'rgba(255, 255, 255, 0)',
    },
    visible: {
      pathLength: 1,
      fill: 'rgba(255, 255, 255, 1)',
      transition: {
        duration: 1,
        ease: 'easeIn',
      },
    },
  };

  return (
    <motion.svg
      width="40px"
      id="logosandtypes_com"
      data-name="logosandtypes com"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 150 150"
    >
      <motion.path
        d="M112.74,12.85h34.07L115.16,100a6.06,6.06,0,0,1-5.71,4H76v0a6.07,6.07,0,0,0,5.09-4Z"
        variants={variants}
        initial="hidden"
        animate="visible"
        strokeWidth="2"
        stroke="#fff"
        stroke-linejoin="round"
        stroke-linecap="round"
      />
      <motion.path
        d="M73.28,102.7A5.73,5.73,0,0,1,68,99.23L61.19,80.47l11.61-32a5.77,5.77,0,0,1,10.73-.31l6.79,18.68-11.61,32A5.73,5.73,0,0,1,73.28,102.7Z"
        variants={variants}
        initial="hidden"
        animate="visible"
        strokeWidth="2"
        stroke="#fff"
        stroke-linejoin="round"
        stroke-linecap="round"
      />
      <motion.path
        d="M75.75,43.33v0a6,6,0,0,0-5.45,4L38.65,134.5H4.58L36.23,47.33a6.07,6.07,0,0,1,5.7-4Z"
        variants={variants}
        initial="hidden"
        animate="visible"
        strokeWidth="2"
        stroke="#fff"
        stroke-linejoin="round"
        stroke-linecap="round"
      />
    </motion.svg>
  );
};
