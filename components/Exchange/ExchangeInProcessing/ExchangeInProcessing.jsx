import React from 'react';
import styles from '../Exchange.module.scss';
import ButtonBorderAnimation from '@/components/Buttons/ButtonBorderAnimation/ButtonBorderAnimation';

import ExchangeHeader from '../ExchangeHeader';
import CurrencyData from '../Components/CurrencyData/CurrencyData';

import Message from '../Components/Message/Message';
import InfoCopy from '../Components/InfoCopy/InfoCopy';
import Info from '../Components/Info/Info';

export default function ExchangeInProcessing({ action }) {

   return (
      <>
         <div className={styles.exchange__title}>Send funds to the address below</div>
         <div className={`${styles.exchange__container} modal-body`}>
            <div className={styles.exchange__body}>
               <ExchangeHeader iconType='progress' />
               <div className={styles.exchange__table}>
                  <CurrencyData
                     className='colored'
                     title='You send'
                     // subtitle='146 currencies'
                     format='TRC20'
                     name='BTC'
                     estimatedValue='1'
                     pathSVG={'./icon_currency/Bitcoin.svg'}
                     selectionButton={false}
                  />
                  <CurrencyData
                     className='colored'
                     title='You receive'
                     // subtitle='146 currencies'
                     format='TRC20'
                     name='ETH'
                     estimatedValue='≈ 110 192.6061'
                     pathSVG={'./icon_currency/Ether.svg'}
                     selectionButton={false}
                  />
               </div>

               <div className={styles['exchange__info-time']}>
                  <Info
                     title='Payment time expires in'
                     value='17:11:28'
                     message=''
                     className=''
                  />
                  <Info
                     title='Creation Date'
                     value='27.01.2023'
                     message='(17:07:02 UTC)'
                     className=''
                  />
               </div>


               <InfoCopy
                  title='Order ID:'
                  value='nfkzRb4UhY'
                  buttonQr={false}
                  buttonCopy={true}
               />
               <InfoCopy
                  title='Amount'
                  value='1 BTC'
                  message='Exchange fee is already included in the specified amount you will receive'
                  buttonQr={false}
                  buttonCopy={true}
               />
               <InfoCopy
                  title='passimpay address (BTC) bitcoin'
                  value='bc1qjrkwnfv2hr8sdmgrv7qwj0cd70grvd47te0hcm'
                  buttonQr={true}
                  buttonCopy={true}
               />
               <InfoCopy
                  title='Tag'
                  value='2466236531'
                  buttonQr={false}
                  buttonCopy={true}
               />



            </div>

            <Message
               text='Please note that you can send funds to the address above only once.'
               color='red'
            />


            <div className={styles.exchange__button}>
               <ButtonBorderAnimation
                  text='Start over'
                  action={action.nextStep}
               />
            </div>

         </div>
      </>
   );
};