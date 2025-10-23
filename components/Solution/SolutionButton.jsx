'use client'

import React from 'react';
import styles from './styles.module.scss';
import ButtonBorderAnimation from '@/components/Buttons/ButtonBorderAnimation/ButtonBorderAnimation';
import useOpenModal from '@/store_redux/hooks/modalsHooks/useOpenModal';


export default function SolutionButton() {

   const openModalContact = useOpenModal('contacts')

   return (
      <div className={styles.solution__button}>
         <ButtonBorderAnimation text='Start accepting crypto now' action={openModalContact} />
      </div>
   );
};