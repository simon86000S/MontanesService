import { TypeAnimation } from 'react-type-animation';
import React from 'react';

 export const Animation = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Montanes Services',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Service de Nettoyage',
        1000,
        'Lavage de vitre',
        1000,
        'lavage de Sol',
        1000,
        'Aspirateur',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'flex',justifyContent: 'center',alignItem:'center',textAlign:'center',color:'blue' }}
      repeat={Infinity}
    />
  );
};