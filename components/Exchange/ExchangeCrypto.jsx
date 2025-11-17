'use client'

import React from 'react';
import styles from './Exchange.module.scss';
import CurrencyData from './Components/CurrencyData/CurrencyData';
import ExchangeInput from './Components/ExchangeInput/ExchangeInput';
import { useSelector } from 'react-redux';

export default function ExchangeCrypto() {

   const tokenSend = useSelector(state => state.coin.send.token);
   const badgeSend = useSelector(state => state.coin.send.badge);
   const tokenGet = useSelector(state => state.coin.get.token);
   const badgeGet = useSelector(state => state.coin.get.badge);
   const sendFormat = useSelector(state => state.coin.sendFormat.name);
   const getFormat = useSelector(state => state.coin.getFormat.name);



   return (

      <div className={styles.exchange__table}>

         <CurrencyData
            title='You send'
            subtitle='146 currencies'
            format={sendFormat}
            token={tokenSend}
            estimatedValue=''
            pathSVG={badgeSend}
            typeButton={true}
            direction='send'
         />

         <ExchangeInput value='≈ $189 738.93' />

         <CurrencyData
            title='You get'
            // subtitle='146 currencies'
            format={getFormat}
            token={tokenGet}
            estimatedValue=''
            pathSVG={badgeGet}
            typeButton={true}
            direction='get'
         />

         <ExchangeInput value='≈ $4 738.93' />

      </div >

   );
};