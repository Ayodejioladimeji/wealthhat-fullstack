import React from 'react';
import support from '../assets/homeOne.svg';
import worldwide from '../assets/homeTwo.svg';
import call_center from '../assets/homeThree.svg';

const services = [
  {
    id: 2,
    icon: <img src={call_center} alt='call_center' />,
    title: 'Fill personal details',
    step: 'One',
    text: `Let’s get to know you better. Kindly fill in your personal and bank information to begin your investment journey.`,
  },
  {
    id: 1,
    icon: <img src={support} alt='support' />,
    title: 'Establish your risk profile',
    step: 'Two',
    text: `Let’s understand your preferable risk level. Your answers would guide us in recommending a suitable investment portfolio for you.`,
  },
  {
    id: 3,
    icon: <img src={worldwide} alt='worldwide' />,
    title: 'Setup an investment portfolio',
    step: 'Three',
    text: `To start investing, begin by creating an investment portfolio`,
  },
];

export default services;
