'use client'

import React, { useState } from 'react';
import BackgroundModal from '../Components/BackgroundModal/BackgroundModal';
import styles from '../Modals.module.scss';
import useCloseModal from '@/store_redux/hooks/modalsHooks/useCloseModal';


import Exchange from '../../Exchange/ExchangeEnter/Exchange';
import ExchangeProcessing from '../../Exchange/ExchangeOrderProcessing/ExchangeOrderProcessing';
import ExchangeInProcessing from '../../Exchange/ExchangeInProcessing/ExchangeInProcessing';
import ExchangeCompleted from '../../Exchange/ExchangeCompleted/ExchangeCompleted';
import ExchangeNotPaid from '../../Exchange/ExchangeNotPaid/ExchangeNotPaid';



const id = 'exchange';

export default function Contact() {
   const [step, setStep] = useState(1);

   const closeModal = useCloseModal(id);

   const stepMethods = {
      nextStep: () => setStep(s => s + 1),
      prevtStep: () => setStep(s => s > 1 ? s - 1 : s = 1),
      resetStep: () => setStep(s => s = 1),
      closeModal: () => closeModal()
   };

   return (
      <BackgroundModal id={id} opacity={true}>

         <div className={styles.modal__scroll}>
            <div className={styles.modal__container}>
               <div className='modal-body'>
                  {step === 1 &&
                     <Exchange
                        action={stepMethods}
                     />}
                  {step === 2 &&
                     <ExchangeProcessing
                        action={stepMethods}
                     />}
                  {step === 3 &&
                     <ExchangeInProcessing
                        action={stepMethods}
                     />}
                  {step === 4 &&
                     <ExchangeCompleted
                        action={stepMethods}
                     />}
                  {step === 4 &&
                     <ExchangeNotPaid
                        action={stepMethods}
                     />}
               </div>
            </div>
         </div>

      </BackgroundModal>
   );
}
