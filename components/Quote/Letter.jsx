import React, { useRef } from 'react';
import { motion, useTransform } from 'framer-motion'
import styles from './Quote.module.scss';


export default function Letter({ letter, scrollYProgress, incrementCount, step }) {
   // 'render' что бы убрать эффект двойного вызова incrementCount() при двойном рендере в dev режиме
   const render = useRef(true);

   const start = useRef();
   if (render.current) {
      start.current = Number((incrementCount() * step).toFixed(4));
      render.current = false;
   }
   const opacity = useTransform(scrollYProgress, [0, start.current - step, start.current, 1], [0.2, 0.2, 1, 1]);

   return (
      <motion.span style={{ opacity }}>
         {letter}
      </motion.span>
   )
};