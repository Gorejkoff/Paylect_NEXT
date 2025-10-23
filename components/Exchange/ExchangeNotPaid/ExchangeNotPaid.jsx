import React from 'react';
import styles from '../Exchange.module.scss';
import ExchangeHeader from '../ExchangeHeader';
import Message from '../Components/Message/Message';
import ButtonBorderAnimation from '@/components/Buttons/ButtonBorderAnimation/ButtonBorderAnimation';
import Info from '../Components/Info/Info';
import stylesCompleted from '../ExchangeCompleted/ExchangeCompleted.module.scss';


export default function ExchangeNotRaid({ action }) {

   return (
      <div className='container'>
         <div className={styles.exchange__title}>Send funds to the address below</div>
         <div className={`${styles.exchange__container} modal-body`}>
            <div className={styles.exchange__body}>
               <ExchangeHeader iconType='not_paid' />

               <div className={stylesCompleted.completed__body}>
                  <Info
                     title="Order ID:"
                     value="nfkzRb4UhY"
                  />
                  <Info
                     title="Amount"
                     value="1 BTC"
                  />
                  <Info
                     title="Recipient address"
                     value="bc1qjrkwnfv2hr8sdmgrv7qwj0cd70grvd47te0hcm"
                  />
               </div>
            </div>
            <Message
               key={2}
               text={"The funds were not received within 3 hours. Please check the rates and create a new transaction."}
               color="red"
            />
            <div className={styles.exchange__button}>
               <ButtonBorderAnimation
                  text="Start over"
                  action={action.resetStep}
               />
            </div>
         </div>
      </div >
   );
};