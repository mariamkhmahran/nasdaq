import React from 'react';
import { motion, Variants } from 'framer-motion';

export const Logo: React.FC = () => {
  const variants: Variants = {
    hidden: {
      pathLength: 0,
      fill: 'rgba(255, 255, 255, 0)',
    },
    inbetween: {
      pathLength: 1,
      transition: {
        duration: 3,
        ease: 'easeIn',
      },
    },
    visible: {
      fill: 'rgba(255, 255, 255, 1)',
      transition: {
        delay: 1,
        duration: 2,
        ease: 'easeIn',
      },
    },
  };

  return (
    <motion.svg
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 453.53 129.23"
    >
      <title>nasdaq-logo</title>
      <motion.path
        d="M144.13,191.38,110.51,284a6.44,6.44,0,0,1-5.41,4.21v.05h35.54A6.45,6.45,0,0,0,146.7,284l33.62-92.6Zm-41.92,95.44a6.09,6.09,0,0,0,5-2.57,6.32,6.32,0,0,0,.8-1.51l12.33-34-7.21-19.84a6.09,6.09,0,0,0-10.6-1.18,6.76,6.76,0,0,0-.8,1.5l-12.33,34,7.24,19.92A6.1,6.1,0,0,0,102.21,286.83ZM68.92,223.76h35.93v0A6.44,6.44,0,0,0,99,228l-33.62,92.6H29.24L62.86,228A6.45,6.45,0,0,1,68.92,223.76Z"
        transform="translate(-29.24 -191.38)"
        variants={variants}
        initial="hidden"
        animate={['inbetween', 'visible']}
        stroke="#fff"
        strokeWidth="1"
        stroke-linejoin="round"
        stroke-linecap="round"
      />
      <motion.path
        d="M226.58,288.24l-27.46-48v48h-9.57V227.43h13.39L230.39,275V227.43h9.69v60.81Z"
        transform="translate(-29.24 -191.38)"
        variants={variants}
        initial="hidden"
        animate={['inbetween', 'visible']}
        stroke="#fff"
        strokeWidth="1"
        stroke-linejoin="round"
        stroke-linecap="round"
      />
      <motion.path
        d="M268.82,289.18c-10.53,0-20.27-1.85-20.27-15.32,0-14.65,15.07-14.65,24.07-14.65.9,0,5.13.19,6.44.25,0-8.22-.12-10.18-12-10.18A86.51,86.51,0,0,0,252.47,251l-.88.16v-8.12l.6-.12A77.87,77.87,0,0,1,268,241.32c11.53,0,21.29,1.17,21.29,15.5v31.26l-.7.07A168.86,168.86,0,0,1,268.82,289.18Zm3.54-22.73c-8.68,0-14.06,1.28-14.06,7.66,0,7.38,6.87,8,13.3,8,2.41,0,6.73-.31,8.06-.41v-15C277.8,266.63,273,266.45,272.37,266.45Z"
        transform="translate(-29.24 -191.38)"
        variants={variants}
        initial="hidden"
        animate={['inbetween', 'visible']}
        stroke="#fff"
        strokeWidth="1"
        stroke-linejoin="round"
        stroke-linecap="round"
      />
      <motion.path
        d="M314,289.18a79.11,79.11,0,0,1-15.19-1.63l-.61-.12v-8.5l.91.2c5.05,1.08,9.42,2,13.79,2,3.54,0,11.76-.56,11.76-5.77,0-4.37-5.68-5.46-10.25-6.34l-.29-.06c-.85-.17-1.65-.33-2.34-.5-6.69-1.74-13.83-4.36-13.83-13.35,0-8.77,6.93-13.8,19-13.8a83.73,83.73,0,0,1,13.38,1.13l1.65.25v8.23l-.88-.15a71.09,71.09,0,0,0-12.63-1.43c-4.79,0-10.49.9-10.49,5.18,0,3.55,4.66,4.56,10.06,5.74,7.54,1.65,16.9,3.69,16.9,14C335,283.74,327.33,289.18,314,289.18Z"
        transform="translate(-29.24 -191.38)"
        variants={variants}
        initial="hidden"
        animate={['inbetween', 'visible']}
        stroke="#fff"
        strokeWidth="1"
        stroke-linejoin="round"
        stroke-linecap="round"
      />
      <motion.path
        d="M365.79,289.71c-15.58,0-25.26-9.05-25.26-23.63,0-15.15,8.93-24.56,23.31-24.56h1.22a58.36,58.36,0,0,1,7.68.49V223.73h10.17v64.33A124,124,0,0,1,365.79,289.71Zm-.09-40.16c-9.85,0-14.63,5.33-14.63,16.28,0,9.83,5.77,15.94,15.06,15.94,1.78,0,3.83-.11,6.61-.36V250.2A44.65,44.65,0,0,0,365.7,249.55Z"
        transform="translate(-29.24 -191.38)"
        variants={variants}
        initial="hidden"
        animate={['inbetween', 'visible']}
        stroke="#fff"
        strokeWidth="1"
        stroke-linejoin="round"
        stroke-linecap="round"
      />
      <motion.path
        d="M411.44,289.18c-10.53,0-20.27-1.85-20.27-15.32,0-14.65,15.07-14.65,24.07-14.65.9,0,5.13.19,6.44.25,0-8.22-.12-10.18-12-10.18A86.47,86.47,0,0,0,395.09,251l-.88.16v-8.12l.6-.12a77.86,77.86,0,0,1,15.78-1.63c11.53,0,21.29,1.17,21.29,15.5v31.26l-.7.07A168.87,168.87,0,0,1,411.44,289.18ZM415,266.45c-8.68,0-14.06,1.28-14.06,7.66,0,7.38,6.87,8,13.3,8,2.41,0,6.74-.31,8.06-.41v-15C420.42,266.63,415.57,266.45,415,266.45Z"
        transform="translate(-29.24 -191.38)"
        variants={variants}
        initial="hidden"
        animate={['inbetween', 'visible']}
        stroke="#fff"
        strokeWidth="1"
        stroke-linejoin="round"
        stroke-linecap="round"
      />
      <motion.path
        d="M472.36,308.9V289a49,49,0,0,1-7.78.56,32.18,32.18,0,0,1-12-2.35c-7.74-3.22-12.37-11.43-12.37-22,0-5.26,1.28-14.87,9.82-20,4.28-2.57,9.35-3.67,17-3.67,2.73,0,6.41.21,10,.42l5.77.3v62.07Zm-6.1-59.37c-10.32,0-15.56,5.28-15.56,15.68,0,13.39,7.82,16.2,14.38,16.2a50.46,50.46,0,0,0,7.37-.5V249.81C469.34,249.6,467.91,249.52,466.27,249.52Z"
        transform="translate(-29.24 -191.38)"
        variants={variants}
        initial="hidden"
        animate={['inbetween', 'visible']}
        stroke="#fff"
        strokeWidth="1"
        stroke-linejoin="round"
        stroke-linecap="round"
      />
    </motion.svg>
  );
};
