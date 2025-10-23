import React from "react";
import styles from './styles.module.scss';


export default function SolutionList({ item }) {

   return (
      <>
         <div className={styles['solution__list-number']}>00{item.id}.</div>
         <div className={styles['solution__list-title']}>{item.title}</div>
         <div></div>
         <div className={styles['solution__list-text']}>{item.text}</div>
      </>
   )
}