import React, { useContext } from "react";
import { useScramble } from "use-scramble";
import { motion } from "framer-motion";
import { ScrollToAnchor } from "@/components/Lenis/Lenis";
import styles from './styles.module.scss';


export default function Link({ text }) {
   const { ref, replay } = useScramble({
      text: text,
      step: 0.1,
      scramble: 10,
   });

   const scrollToAnchor = useContext(ScrollToAnchor)

   return (

      <a className={styles['button-to-top__button']}
         href="#top"
         onClick={() => { scrollToAnchor("top") }}
      >
         <span>
            <div className={styles['button-to-top__anchor-text']}>
               {text}
            </div>

            <motion.span
               className={styles['button-to-top__mask']}
               ref={ref}
               onMouseOver={replay}
               onFocus={replay}
            />

         </span>
         <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.4551 20.6455L10.4551 3.08594L9.58008 3.08594L2.58008 9.7526M18.2051 10.3478L14.7676 7.07403" stroke="white" strokeWidth="5" />
         </svg>
      </a>



















   )
}
