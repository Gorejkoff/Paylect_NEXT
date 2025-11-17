'use client'

import React, { useEffect, useRef } from 'react';
import styles from './TabButtons.module.scss'

export default function TabButtons({ listButtons, isActive, setIsActive, setClass }) {

   const dataSise = useRef({
      top: 0,
      left: 0,
      height: 0,
      width: 0,
      parentHeight: 0,
      parentWidth: 0,
   });
   const ref = useRef(null);

   function getSize() {
      const button = ref.current.querySelector('.active');
      const size = {
         top: button.offsetTop,
         left: button.offsetLeft,
         height: button.offsetHeight,
         width: button.offsetWidth,
         parentHeight: button.parentElement.offsetHeight,
         parentWidth: button.parentElement.offsetWidth,
      }
      dataSise.current = size;
      ref.current.style.setProperty('--offset-top', dataSise.current.top + 'px')
      ref.current.style.setProperty('--offset-bottom', dataSise.current.parentHeight - dataSise.current.top - dataSise.current.height - 2 + 'px')
      ref.current.style.setProperty('--offset-right', dataSise.current.left + 'px')
      ref.current.style.setProperty('--offset-left', dataSise.current.parentWidth - dataSise.current.left - dataSise.current.width + 'px')
      console.log(dataSise.current);
      console.log(ref.current);
   }

   useEffect(() => { getSize() })


   return (
      <div className={`${styles['tab-buttons__shell']} ${setClass}`} >
         <div
            className={styles['tab-buttons__body']}
            ref={ref}
         >
            {listButtons.map((item, index) =>
               <button
                  className={`${styles['tab-buttons__item']} ${isActive === item.id ? 'active' : ''}`}
                  key={item.id}
                  type="button"
                  disabled={item.disabled || false}
                  onClick={(event) => {
                     setIsActive(item.id)
                     getSize(event);
                  }}
               >
                  {item.text}
               </button>
            )}

            <div className={styles['tab-buttons__mask']}>
               {listButtons.map((item, index) =>
                  <span
                     className={`${styles['tab-buttons__item']} `}
                     key={item.id}
                  >
                     {item.text}
                  </span>
               )}
            </div>
         </div>

      </div >
   );
}; 