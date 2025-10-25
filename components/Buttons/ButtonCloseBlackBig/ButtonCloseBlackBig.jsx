import React from 'react';
import styles from '../Buttons.module.scss';

export default function ButtonCloseBlackBig({ action }) {

   return (
      <button
         className={[
            styles['button-common-style__hover-green'],
            styles['button-common-style__rotate'],
            styles['button-common-style__size']
         ].join(' ')}
         type='button'
         onClick={action}
      >
         <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.2439 20L30 30M20 30L29.7561 20" stroke="white" />
         </svg>
      </button>
   );
};