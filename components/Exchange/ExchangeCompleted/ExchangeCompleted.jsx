import React from 'react';
import stylesCompleted from './ExchangeCompleted.module.scss';
import styles from '../Exchange.module.scss'
import ButtonBorderAnimation from '@/components/Buttons/ButtonBorderAnimation/ButtonBorderAnimation';
import ExchangeHeader from '../ExchangeHeader';
import InfoCopy from '../Components/InfoCopy/InfoCopy';
import Message from '../Components/Message/Message';
import Info from '../Components/Info/Info';

export default function ExchangeCompleted({ action }) {

   return (
      <div className='container'>
         <div className={styles.exchange__title}>Exchange</div>
         <div className={`${styles.exchange__container} modal-body`}>
            <div className={styles.exchange__body}>
               <ExchangeHeader iconType='completed' />

               <div className={stylesCompleted.completed__body}>
                  <Message
                     text={[
                        "Your order has been successfully executed! We have sent ",
                        <span>0.04773986&nbsp;BTC </span>,
                        "to the following address: "
                     ]}
                     color=""
                  />
                  <Info
                     title="passimpay address (BTC) bitcoin"
                     value="bc1qjrkwnfv2hr8sdmgrv7qwj0cd70grvd47te0hcm"
                  />
                  <InfoCopy
                     title="Tag"
                     value="2466236531"
                     buttonQr={false}
                     buttonCopy={true}
                  />
                  <Message
                     text={[
                        "If you have any questions or feedback, we would be happy to hear from you! ",
                        <a href="#0">Support Team </a>
                     ]}
                     color=""
                  />
               </div>
            </div>

            <div className={styles.exchange__button}>
               <ButtonBorderAnimation
                  text="Return to Exchange"
                  action={action.resetStep}
                  className=""
               />
            </div>

         </div>
      </div>
   );
};