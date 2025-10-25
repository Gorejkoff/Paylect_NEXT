import React from 'react';
import styles from '../Buttons.module.scss';


export default function ButtonNotifications({ action }) {

   return (
      <button
         className={[
            styles['button-common-style__hover-green'],
            styles['button-common-style__size']
         ].join(' ')}
         type='button'
         aria-label='notifications'
         onClick={action}
      >
         <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.7002 15.5884L8.0002 14.6237L8.2002 9.80045C8.2002 4.49491 16.7002 4.97721 16.7002 9.80045V14.6237L17.7002 15.5884V17.0353H13.2002L11.7002 18" stroke="#848484" strokeWidth="1.5" />
            <path d="M6 17H11" stroke="#848484" strokeWidth="1.5" />
            <path d="M12.5 4V6" stroke="#848484" strokeWidth="1.5" />
         </svg>
      </button>
   );
};