'use client'

import React from "react";
import { motion } from "framer-motion";
import styles from './Carousel.module.scss';
import useCarousel from "@/hooks/useCarousel";

export default function Carousel({
   text,
   color,
   bgcolor,
   version }) {

   const content = useCarousel(text, color);

   return (
      <div
         className={`${styles['carousel']} ${version ? styles['version'] : ''}`}
         style={{
            '--color': color ? color : undefined,
            '--bg-color': bgcolor ? bgcolor : undefined
         }}
      >
         <div className={styles['carousel__text']}>
            <motion.div
               animate={{ x: ["-50%", "0%"] }}
               transition={{
                  repeat: Infinity,
                  duration: 100,
                  ease: "linear"
               }}
            >
               {[0, 1].map((i) => <div className={styles['carousel__stripe']} key={i}>{content}</div>)}
            </motion.div>
         </div>
      </div >
   )
}

