import React from 'react';
import styles from './Exchange.module.scss';
import CurrencyData from './Components/CurrencyData/CurrencyData';
import ExchangeInput from './Components/ExchangeInput/ExchangeInput';


export default function ExchangeCrypto() {

   return (

      <div className={styles.exchange__table}>

         <CurrencyData
            title='You send'
            subtitle='146 currencies'
            format='TRC20'
            name='BTC'
            estimatedValue=''
            pathSVG={'./icon_currency/Bitcoin.svg'}
            typeButton={true}
         />

         <ExchangeInput value='≈ $189 738.93' />

         <CurrencyData
            title='You get'
            // subtitle='146 currencies'
            format='AVALANCHE C-CHAN'
            name='ETH'
            estimatedValue=''
            pathSVG={'./icon_currency/Ether.svg'}
            typeButton={true}
         />

         <ExchangeInput value='≈ $4 738.93' />

      </div >

   );
};