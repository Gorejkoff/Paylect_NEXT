'use client'

import React from 'react';
import styles from './SimpleTabs.module.scss';
import ButtonArrow from '@/components/Buttons/ButtonArrow/ButtonArrow';
import { motion } from 'framer-motion';


export default function SimpleTab({
   id,
   title,
   children,
   activeTab,
   setActiveTab,
   variants
}) {
   const isOpen = activeTab === id;

   return (
      <div className={styles['simple-tabs']}>
         <div className={styles['simple-tabs__header']}
            onClick={() => { setActiveTab(isOpen ? null : id) }}
         >
            <div>{title}</div>
            <ButtonArrow isActive={isOpen} />
         </div>
         <motion.div
            style={{ overflow: 'hidden' }}
            variants={variants.content}
            animate={isOpen ? "active" : "static"}
         >
            {children}
         </motion.div>
      </div>
   );
};