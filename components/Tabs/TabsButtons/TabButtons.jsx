import React from 'react';
import styles from './TabButtons.module.scss'

export default function TabButtons({ listButtons, isActive, setIsActive, setClass }) {

   return (
      <div className={`${styles['tab-buttons__shell']} ${setClass}`} >
         <div className={styles['tab-buttons__body']}>
            {listButtons.map((item, index) =>
               <button
                  className={`${styles['tab-buttons__item']} ${isActive === item.id ? 'active' : ''}`}
                  key={item.id}
                  type="button"
                  disabled={item.disabled || false}
                  onClick={() => setIsActive(item.id)}
               >
                  {item.text}
               </button>
            )}
         </div>
      </div>
   );
}; 