'use client'

import React, { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import { useInView } from "framer-motion";
import styles from './Services.module.scss';


export default function ServicesLottie({ file }) {

   const ref = useRef();
   const lottieRef = useRef();
   const inView = useInView(ref, { amount: 0.5 });

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
         ref={ref}
         className={styles['services__lottie-wrapper']}
      >
         <Lottie
            lottieRef={lottieRef}
            animationData={require(`../../assets/json/animation/${file}`)}
            loop={true}
            autoplay={false}
         />
      </div>
   );
};