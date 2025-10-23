import React from 'react';
import styles from './Info.module.scss';

export default function Info({ title, value, message, className = '' }) {

   return (
      <div className={styles.info}>
         {title && <div className={styles.info__title}>{title}</div>}
         {value && <div className={`${styles.info__value} ${className}`}>{value}</div>}
         {message && <div className={styles.info__message}>{message}</div>}
      </div>
   );
};