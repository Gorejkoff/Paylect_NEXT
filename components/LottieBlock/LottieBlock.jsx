'use client'

import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import processing from '@/json/animation/processing.json';
import { useInView } from 'framer-motion';
import styles from './LottieBlock.module.scss';

export default function LottieBlock() {
   const contRef = useRef();
   const lottieRef = useRef();

   const inView = useInView(contRef);

   useEffect(() => {
      if (lottieRef.current) {
         if (inView) {
            lottieRef.current.play();
         } else {
            lottieRef.current.stop();
         }
      }
   }, [inView]);

   return (
      <div
         ref={contRef}
         className={styles['lottie-block']}
      >
         <div className='container'>
            <div className={styles['lottie-block__screen']}>
               <Lottie
                  animationData={processing}
                  loop={true}
                  lottieRef={lottieRef} />
            </div>
         </div>
      </div >
   );
}
