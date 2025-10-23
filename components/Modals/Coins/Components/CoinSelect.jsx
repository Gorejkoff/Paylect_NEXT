'use client'

import React from 'react';
import styles from '../Coins.module.scss';
import useOpenModal from '@/store_redux/hooks/modalsHooks/useOpenModal';


export default function CoinSelect({ text, img, alt }) {
   const openModal = useOpenModal('standard');

   return (
      <label className={styles['coins__select-item']}>
         <input
            type="radio"
            name="coin_select"
            onChange={openModal}
         />
         <img className={styles['coins__select-img']} src="./svg/arrow-color.svg" alt="selected" />
         {text}
         <img className={styles['coins__coin-icon']} src={img} alt={alt} />
      </label>
   );
};