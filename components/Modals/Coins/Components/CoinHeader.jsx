'use client'

import React from 'react';
import styles from '../../Modals.module.scss';
import useCloseModal from '@/store_redux/hooks/modalsHooks/useCloseModal';
import ButtonCloseLight from '@/components/Buttons/ButtonCloseBlackBig/ButtonCloseBlackBig';




export default function CoinHeader({ idModal, title }) {
   const closeModal = useCloseModal(idModal)
   return (
      <div className={styles['modal__light-header']}>
         <div className={styles['modal__light-title']}>{title}</div>
         <ButtonCloseLight action={closeModal} />
      </div>
   );
};