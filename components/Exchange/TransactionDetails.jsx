import React from 'react';
import styles from './TransactionDetails.module.scss';


export default function TransactionDetails({ props }) {

   return (
      <div className={styles['transaction-details__table']}>
         {props.map((item, index) =>
            <div key={index} className={styles['transaction-details__body']}>
               <div className={styles['transaction-details__title']}>{item.title}</div>
               <div className={styles['transaction-details__data']}>{item.data}</div>
            </div>
         )}
      </div>
   )
};