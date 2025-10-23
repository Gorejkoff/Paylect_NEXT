'use client'

import React, { useContext, useEffect, useRef } from 'react';
import { useScramble } from "use-scramble";
import { motion } from "framer-motion";
import styles from './styles.module.scss';
import { ScrollToAnchor } from '@/components/Lenis/Lenis';
import useOpenModal from '@/store_redux/hooks/modalsHooks/useOpenModal';

const variantsHover = {
   hover: { x: -5 },
   leave: { x: 0 }
}

const variantsSVG = {
   hover: {
      opacity: 1,
      x: 5,
      y: "-50%"
   },
   leave: {
      opacity: 0,
      x: 0,
      y: "-50%"
   }
}


export default function LinkTextAnimated({ props }) {

   const scrollToAnhor = useContext(ScrollToAnchor)

   const { ref, replay } = useScramble({
      text: props.name,
      step: 0.1,
      scramble: 10,
   });

   const propsLink =
      props.href ?
         {
            href: props.href
         } :
         {
            href: "#anchor_" + props.id,
            onClick: () => { scrollToAnhor("#anchor_" + props.id) }
         }

   const propsButton = {
      type: props.type,
      onClick: props.action ? props.action : useOpenModal(props.id)
   }
   const Tag = props.type ? 'button' : 'a';
   const attr = props.type ? propsButton : propsLink;

   return (

      <Tag
         className={styles['link-with-underline']}
         {...attr}
      >
         <motion.span
            initial="leave"
            animate="leave"
            whileHover="hover"
         >
            <span className={styles['link-with-underline__text']}>
               {props.name}
            </span>

            <motion.span
               className={styles['link-with-underline__mask']}
               ref={ref}
               onMouseOver={replay}
               onFocus={replay}
               variants={variantsHover}
            />

            <motion.svg width="10" height="10" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg"
               className={styles['link-with-underline__arrow']}
               variants={variantsSVG}
            >
               <path d="M21.6901 8.83038L12.9994 17.6558L11.8648 16.5035L18.6185 9.64512L0.830078 9.64512L0.830078 8.01564L18.6185 8.01564L11.8648 1.1573L12.9994 0.00499916L21.6901 8.83038Z" fill="white" />
            </motion.svg>

         </motion.span>
      </Tag>

   )
};