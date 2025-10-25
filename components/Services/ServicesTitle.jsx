import React from "react";
import styles from './Services.module.scss';


export default function ServicesTitle() {
   return (
      <div className={styles['services__title-body']}>
         <div className={styles['services__title-side']}>
            <span>/</span>
            <span>Services</span>
            <span></span>
         </div>
         <div className={styles['services__title']}>
            <h2>Tech stacks for a rapidly evolving world:</h2>
         </div>
         <div className={styles['services__title-side']}></div>
      </div>
   )
}  