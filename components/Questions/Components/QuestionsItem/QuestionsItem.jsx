'use client'

import { React, useState } from 'react';
import styles from '../../Questions.module.scss';
import { motion } from 'framer-motion';
import ButtonArrow from '@/components/Buttons/ButtonArrow/ButtonArrow';


export default function QuestionsItem({ data, activeTab, setActiveTab }) {

   const isOpen = data.id === activeTab;
   const [isHovered, setIsHovered] = useState(false);

   const variants = {
      parent: {
         hover: {},
         active: {},
         static: {},
      },
      circle: {
         hover: {
            backgroundColor: "var(--color-spring-green-73)",
            borderColor: "var(--color-spring-green-73)"
         },
         static: { backgroundColor: "#59ffac00" },
      },
      line: {
         active: { opacity: 1 },
         static: { opacity: .12 },
      },
      height: {
         active: { height: 'auto' },
         static: { height: 0 },
      },
      arrow: {
         hover: { rotate: 45 },
         static: { rotate: 0 },
      }
   }


   return (
      <motion.div
         layout
         style={{ overflow: 'hidden' }}
         initial='static'
         whileHover='hover'
         variants={variants.parent}
         onHoverStart={() => setIsHovered(true)}
         onHoverEnd={() => setIsHovered(false)}
      >
         <div className={styles['questions__block-header']}
            onClick={() => setActiveTab(isOpen ? false : data.id)}
         >
            <div className={styles.questions__number}>
               <span>Q/0{data.id}</span>
               <div className={styles.questions__circle}>
                  <motion.div
                     layout
                     initial={variants.circle.static}
                     variants={variants.circle}
                  />
               </div>
            </div>
            <div className={styles['questions__text-body']}>
               <div className={styles.questions__text}>{data.question}</div>
               <ButtonArrow isActive={isHovered} />
            </div>
         </div>

         <motion.div
            layout
            initial={variants.height.static}
            animate={isOpen ? 'active' : 'static'}
            variants={variants.height}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
         >
            <div className={styles.questions__answer}>
               <div></div>
               <div>
                  <div className={styles['questions__answer-text']}>{data.answer}</div>
               </div>
            </div>
            <div className={styles.questions__border}>
               <div></div>
               <div></div>
            </div>
         </motion.div>

         <motion.div
            layout
            initial={variants.line.static}
            className={styles['questions__border-bottom']}
            variants={variants.line}
            animate={isOpen ? 'active' : 'static'}
            transition={{ duration: 0.8, }}
         >
         </motion.div>

      </motion.div>
   )
}