'use client'

import React from 'react';
import styles from '../Coins.module.scss';
import CoinSelect from './CoinSelect';


export default function BlockchainList({ list, activeCoin }) {



   return (

      <div
         className={styles['coins__select-scroll']}
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