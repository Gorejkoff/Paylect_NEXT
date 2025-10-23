'use client'

import { React, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useScramble } from 'use-scramble';
import Link from 'next/link';
import useMediaQuery from '@/hooks/useMediaQuery';
import styles from './ButtonBorderAnimation.module.scss';
import { hoverButton, variantsH, variantsV } from './button.animation'
import ButtonArrow from './ButtonArrow';


export default function Button({ action, text, type, adaptive, href }) {

   const MotionElement = href ? motion.create(Link) : motion.button;
   const MIN768 = useMediaQuery('(min-width: 768px)');
   const trigger = useRef(null);
   const isInView = useInView(trigger, { amount: 1, once: !MIN768.matches });
   const { ref, replay } = useScramble({
      text: text,
      step: 0.1,
      scramble: 10,
   });

   return (
      <div
         ref={trigger}
         className={`${styles['button-border-animation']} ${adaptive ? styles.adaptive : ''}`}>
         <MotionElement
            {...(href ?
               {
                  href: href
               } :
               {
                  type: type || 'button'
               })}
            onClick={action}
            initial='static'
            whileHover='hover'
            variants={hoverButton}
         >
            <motion.span
               className={styles['button-border-animation__line']}
               style={{ top: 0 }}
               variants={variantsH}
               initial='hide'
               animate={isInView ? 'show' : 'hide'}
            />
            <motion.span
               className={styles['button-border-animation__line']}
               style={{ bottom: 0 }}
               variants={variantsH}
               initial='hide'
               animate={isInView ? 'show' : 'hide'}
            />
            <motion.span
               className={styles['button-border-animation__line-top']}
               style={{ left: 0 }}
               variants={variantsV}
               initial='hide'
               animate={isInView ? 'show' : 'hide'}
            />
            <motion.span
               className={styles['button-border-animation__line-top']}
               style={{ right: 0 }}
               variants={variantsV}
               initial='hide'
               animate={isInView ? 'show' : 'hide'}
            />
            <motion.span
               className={styles['button-border-animation__line-bottom']}
               style={{ left: 0 }}
               variants={variantsV}
               initial='hide'
               animate={isInView ? 'show' : 'hide'}
            />
            <motion.span
               className={styles['button-border-animation__line-bottom']}
               style={{ right: 0 }}
               variants={variantsV}
               initial='hide'
               animate={isInView ? 'show' : 'hide'}
            />

            <span className={styles['button-border-animation__text-wrapper']}>
               <span
                  className={`${styles['button-border-animation__text']} ${styles['button-border-animation__text-mask']}`}
                  ref={ref}
                  onMouseOver={replay}
                  onFocus={replay}
               />
               <span className={styles['button-border-animation__text']}>
                  {text}
               </span>
            </span>
            <ButtonArrow />
         </MotionElement>
      </div >

   )
}  