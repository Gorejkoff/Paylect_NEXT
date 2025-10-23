import React from 'react';
import styles from './ButtonBorderAnimation.module.scss';
import { motion } from 'framer-motion';
import { variantsV } from './button.animation';



const hoverButtonArrow = {
   hover: {
      rotate: 45,
      transition: { duration: 0.3 }
   },
   static: {}
}
const isInView = true;

export default function ButtonArrow({ href, type, action }) {

   const Tag = href ? 'a' : type ? 'button' : 'span';
   const attr = href ? { href: href } : type ? { type: type } : null;


   return (
      <Tag
         className={styles['button-border-animation__arrow-wrapper']}
         {...attr}
         onClick={action}
      >

         <motion.span
            className={styles['button-border-animation__line-top']}
            style={{ left: 0 }}
            variants={variantsV}
            initial="hide"
            animate={isInView ? "show" : "hide"}
         />

         <motion.span
            className={styles['button-border-animation__line-bottom']}
            style={{ left: 0 }}
            variants={variantsV}
            initial="hide"
            animate={isInView ? "show" : "hide"}
         />

         <span className={styles['button-border-animation__arrow']}>
            <motion.svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg"
               variants={hoverButtonArrow}
            >
               <path d="M2.05881 9.48302L8.72282 2.7967L8.0811 2.15283H1.31836M9.06836 10.3403V5.46533" stroke="white" strokeWidth="2.5" />
            </motion.svg>
         </span>
      </Tag>
   );
};