'use client'

import React, { useState } from 'react';
import styles from '../Coins.module.scss';
import useOpenModal from '@/store_redux/hooks/modalsHooks/useOpenModal';
import useSetCoin from '@/store_redux/hooks/selectCoinHooks/useSetCoin';


export default function CoinSelect(props) {
   const { activeCoin, ...otherProps } = props;
   const isActive = Number(activeCoin) === otherProps.id;
   const openModal = useOpenModal('standard');
   const setSendCoin = useSetCoin(props);

   return (
      <div
         className={`${styles['coins__select-item']} ${isActive ? 'active' : ''}`}
         onClick={() => {
            openModal();
            setSendCoin();
         }}
      >
         <img className={styles['coins__select-img']} src="./svg/arrow-color.svg" alt="selected" />
         {props.not_found ? props.not_found : props.name}
         <img className={styles['coins__coin-icon']} src={props.img} alt={props.token} />
      </div>
   );
};