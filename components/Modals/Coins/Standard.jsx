'use client'

import React from 'react';
import BackgroundModal from '../Components/BackgroundModal/BackgroundModal';
import stylesModal from '../Modals.module.scss';
import styles from './Coins.module.scss';
import Standard from './Components/Standard';
import useMediaQuery from '@/hooks/useMediaQuery';


const id = 'standard';

export default function StandardCoins() {

   const MIN1024 = useMediaQuery('(min-width: 1024px)');

   if (MIN1024) return;

   return (

      <BackgroundModal id={id}>

         <div className={stylesModal.modal__scroll}>
            <div className={stylesModal.modal__container}>
               <div className={styles.coins__shell}>
                  <Standard />
               </div>
            </div>
         </div>

      </BackgroundModal>
   );
};