'use client'

import React, { useEffect, useRef } from 'react';
import styles from '../Coins.module.scss';
import CoinSelect from './CoinSelect';


export default function BlockchainList({ list, activeCoin, dimensions }) {

   const ref = useRef(null);


   function setHeight() {
      if (!dimensions?.height) return;
      ref.current.style.height = 'auto';
      requestAnimationFrame(() => {
         ref.current.style.height = dimensions.height + 'px';
      })
   }

   useEffect(() => {
      setHeight()
   })

   return (

      <div
         ref={ref}
         className={styles['coins__select-scroll']}
         // style={dimensions && { height: dimensions.height + 'px' }}
         name="blockchain_select"
         id="blockchain_select"
      >
         <div>
            {list.map((props) =>
               <CoinSelect
                  key={props.id}
                  {...props}
                  activeCoin={activeCoin}
               />
            )}
         </div>
      </div>

   )
}