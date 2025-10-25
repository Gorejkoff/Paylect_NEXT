'use client'

import React from 'react';
import styles from './Services.module.scss';
import ButtonBorderAnimation from '@/components/Buttons/ButtonBorderAnimation/ButtonBorderAnimation'
import useOpenModal from '@/store_redux/hooks/modalsHooks/useOpenModal';

export default function ServicesButton() {

   const openModalContact = useOpenModal('contacts');

   return (
      <div className={styles['services__block-wrapper-button']}>
         <ButtonBorderAnimation
            action={openModalContact}
            text="Try out accepting crypto now"
         />
      </div>
   );
};