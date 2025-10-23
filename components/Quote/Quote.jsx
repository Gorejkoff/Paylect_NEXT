'use client'

import { React, useRef } from 'react';
import styles from './Quote.module.scss';
import { motion, useScroll } from 'framer-motion'
import Word from './Word';

const TEXT_QUOTE = 'I was highly impressed by their adaptability, expertise, and commitment in handling the workload. Their dedication to the project, along with their professional demeanor, really caught my attention.'


export default function Quote() {

   const count = useRef(0);
   const step = (1 / TEXT_QUOTE.replaceAll(' ', '').length).toFixed(4);

   function incrementCount() {
      ++count.current
      return count.current;
   }

   const words = TEXT_QUOTE.split(' ');

   const ref = useRef(null);
   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ['0.4 0.8', '0.8 0.4']
   });


   return (
      <div id='anchor_4'>
         <div className={styles.quote__body}>
            <div className='container-large'>
               <motion.div ref={ref}>
                  <div className={styles.quote__text}>
                     {words.map((word, index) =>
                        <Word
                           key={index}
                           word={word}
                           scrollYProgress={scrollYProgress}
                           incrementCount={incrementCount}
                           step={step}
                        />
                     )}
                  </div>
               </motion.div>
            </div>
         </div>
      </div>
   )
}


