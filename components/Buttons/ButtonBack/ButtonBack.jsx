import React from 'react';
import styles from '../Buttons.module.scss';

export default function ButtonBack({ action }) {

   return (
      <button
         className={[
            styles['button-common-style__hover-green'],
            styles['button-common-style__size']
         ].join(' ')}
         type='button'
         onClick={action}
         aria-label='back'
      >
         <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.9712 26.25L21.1914 26.25L21.1914 26.6875L24.5247 30.1875M24.8224 22.375L23.1855 24.0937" stroke="white" strokeWidth="2.5" />
         </svg>
      </button>
   );
};