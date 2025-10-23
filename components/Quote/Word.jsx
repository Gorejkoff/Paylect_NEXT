'use client'

import React from 'react';
import styles from './Quote.module.scss';
import Letter from './Letter';



export default function Word({ word, scrollYProgress, incrementCount, step }) {

   const letters = word.split('');

   return (
      <>
         <span className={styles.quote__word}>
            {letters.map((letter, index) =>
               <Letter
                  key={index}
                  letter={letter}
                  scrollYProgress={scrollYProgress}
                  incrementCount={incrementCount}
                  step={step}
               />
            )}
            &thinsp;
         </span>
      </>
   )
};