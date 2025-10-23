'use client'

import React, { useState } from 'react';
import stylesModal from '../../Modals.module.scss';
import styles from '../Coins.module.scss';
import coinSelect from '@/json/data/coin_select.json';
import changeTabsProps from '@/json/data/coin_buttons.json';
import TabButtons from '../../../Tabs/TabsButtons/TabButtons';
import Search from '../../../FormsElements/Search/Search';
import CoinSelect from './CoinSelect';
import CoinHeader from './CoinHeader';

const idModal = 'blockchain'

function Content() {
   const [isActive, setIsActive] = useState(changeTabsProps[0].id);

   return (
      <div className={stylesModal['modal__light-padding']} style={{ maxHeight: 'calc(100vh - 2 * var(--padding, 50px))' }}>

         <CoinHeader
            idModal={idModal}
            title='Select a coin'
         />

         <TabButtons
            listButtons={changeTabsProps}
            setClass='light'
            isActive={isActive}
            setIsActive={setIsActive}
         />

         <Search />

         <div className={styles['coins__select-scroll']}
            method="post"
            name="blockchain_select"
            id="blockchain_select"
         >
            {coinSelect.map((item, index) => <CoinSelect {...item} key={index} />)}
         </div>

      </div>
   )
}

export default function Blockchain() {

   return (
      <div className={`${stylesModal['modal__light-body']} modal-body coin-list`}>
         <Content />
      </div>
   );
};