import React from 'react';
import styles from '../Buttons.module.scss';


export default function ButtonNotifications({ action }) {

   return (
      <button
         className={styles['button-common-style__hover-green']}
         type='button'
         aria-label='notifications'
         onClick={action}
      >
         <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12.5" cy="13" r="12.5" fill="#141414" />
            <path d="M18.9236 17.2481L17.7115 16.2531L17.5778 12.2925C17.4919 9.74075 15.6402 7.70134 13.254 7.38607V6.45996H11.9178V7.39592C9.55066 7.7309 7.7276 9.76046 7.6417 12.3023L7.50808 16.3023L6.68722 17.1004L7.59398 18.0954H6V19.4747H11.6314V18.0954H7.61307L8.82526 16.923L8.97797 12.3614C9.04479 10.3319 10.6483 8.73583 12.6145 8.73583C14.5808 8.73583 16.1747 10.322 16.2511 12.3614L16.4038 16.9624L17.616 17.9575V18.1053H12.9772L11.6314 19.4846L12.5764 20.46L13.5213 19.4747H19L18.9141 17.258L18.9236 17.2481Z" fill="#848484" />
         </svg>
      </button>
   );
};