import React from 'react';
import styles from '../Exchange.module.scss';
import ButtonBorderAnimation from '@/components/Buttons/ButtonBorderAnimation/ButtonBorderAnimation';
import ExchangeHeader from '../ExchangeHeader';
import CurrencyData from '../Components/CurrencyData/CurrencyData';
import Info from '../Components/Info/Info';




export default function ExchangeProcessing({ action }) {



   return (
      <div className='container'>
         <div className={styles.exchange__title}>Order processing</div>
         <div className={`${styles.exchange__container} modal-body`}>
            <div className={styles.exchange__body}>
               <ExchangeHeader
                  iconType='back'
                  action={action.prevtStep} />
               <div className={styles.exchange__table}>
                  <CurrencyData
                     className="colored"
                     title="You send"
                     // subtitle="146 currencies"
                     format="TRC20"
                     name="BTC"
                     estimatedValue="1"
                     pathSVG={'./icon_currency/Bitcoin.svg'}
                     typeButton={false}
                  />

                  <CurrencyData
                     className="colored"
                     title="You receive"
                     // subtitle="146 currencies"
                     format="TRC20"
                     name="ETH"
                     estimatedValue="≈ 110 192.6061"
                     pathSVG={'./icon_currency/Ether.svg'}
                     typeButton={false}
                  />

               </div>

               <Info
                  title="Exchange fee"
                  value="1 332.3228 USDT ≈ $1 332.49"
                  message="Exchange fee is already included in the specified amount you will receive"
                  className="large"
               />
               <Info
                  title="Network fee"
                  value="1 USDT ≈ $1"
                  message="Network fee is already included in the specified amount you will receive"
                  className="large"
               />
               <Info
                  title="Recipient address"
                  value="TPAgKfYzRdK83Qocc4gXvEVu4jPKfeuer5"
                  message=""
               />
               <Info
                  title="Email for invoice"
                  value="passimpay@gmai.com"
                  message=""
               />
               <Info
                  title="Exchange rate"
                  value="1 BTC ≈ 111 175.45 USDT"
                  message=""
                  className="large"
               />

            </div>



            <div className={styles.exchange__button}>
               <ButtonBorderAnimation
                  text="Exchange"
                  action={action.nextStep}
               />
            </div>

         </div>
      </div>
   );
};