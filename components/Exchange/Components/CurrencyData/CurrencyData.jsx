'use client'

import React from 'react';
import styles from './CurrencyData.module.scss';
import useOpenModal from '@/store_redux/hooks/modalsHooks/useOpenModal';
import useGetSVGCode from '@/hooks/useGetSVGCode';


export default function CurrencyData({ title, subtitle, format, name, estimatedValue, typeButton, pathSVG }) {
   const openModal = useOpenModal('blockchain');
   const iconSVG = useGetSVGCode(pathSVG);

   const propsButton = typeButton ? {
      type: 'button',
      onClick: () => openModal()
   } : {}

   const Tag = typeButton ? 'button' : 'div'

   return (
      <Tag
         className={styles['currency-data__block']}
         {...propsButton}
      >
         <span className={styles['currency-data__header']}>
            <span>
               <span className={styles['currency-data__send-title']}>{title}</span>
               <span className={styles['currency-data__quantity']}>{subtitle}</span>
            </span>
            <span className={styles['currency-data__format']}>
               <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="5.5" cy="5.5" r="5" stroke="#141414" strokeWidth="0.5" />
                  <path d="M 5.5,3.5 a 2,2 0 1,0 0,4 a 2,2 0 1,0 0,-4" fill="#141414" />
               </svg>
               {format}
            </span>
         </span>
         <span>
            <span className={styles['currency-data__estimated-value']}>{estimatedValue}</span>
            <span className={styles['currency-data__footer']}>
               <span className={styles['currency-data__name']}>{name}</span>
               {pathSVG && <span className={styles['currency-data__name-icon']} dangerouslySetInnerHTML={{ __html: iconSVG.icon }} />}
               {typeButton ?
                  <span className={styles['currency-data__change-body']}>
                     <span className={styles['currency-data__change']}>
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M5.25 0.959961L5.25 9.73972H5.6875L9.1875 6.40639M1.375 6.10877L3.09375 7.74568" stroke="#141414" strokeWidth="2.5" />
                        </svg>
                     </span>
                  </span> :
                  null}
            </span>
         </span>
      </Tag>
   );
};