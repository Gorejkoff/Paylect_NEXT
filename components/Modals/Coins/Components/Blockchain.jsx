'use client'

import React, { useMemo, useState } from 'react';
import stylesModal from '../../Modals.module.scss';
import styles from '../Coins.module.scss';
import coinList from '@/json/data/coin_select.json';
import listTabsProps from '@/json/data/coin_buttons.json';
import TabButtons from '../../../Tabs/TabsButtons/TabButtons';
import Search from '../../../FormsElements/Search/Search';
import CoinHeader from './CoinHeader';
import useCloseModal from '@/store_redux/hooks/modalsHooks/useCloseModal';
import { useSelector } from 'react-redux';
// import { motion } from 'framer-motion';
import BlockchainList from './BlockchainList';


const idModal = 'blockchain';

export default function Blockchain() {
   const [isActive, setIsActive] = useState(listTabsProps[0].id);
   const [search, setSearch] = useState(null);
   const closeModal = useCloseModal('standard');
   const activeCoin = useSelector(state => state.coin[state.coin.direction.action].id);

   const list = useMemo(() => {
      let collect = [];
      listTabsProps.forEach(element => {
         const list = coinList.filter((coin) => coin.category === element.filter || element.filter === 'all');
         if (search) {
            const listFilter = list.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()))
            collect.push(listFilter.length > 0 ? listFilter : [{ id: 999999, not_found: 'not found' }]);
            return;
         }
         collect.push(list);
      });
      return collect;
   }, [search]);


   const searchCoin = (value) => {
      if (!value) setSearch(null);
      if (value) setSearch(value);
   }


   return (
      <div className={`${stylesModal['modal__light-body']} modal-body coin-list`}>
         <div
            className={stylesModal['modal__light-padding']}
            style={{ maxHeight: 'calc(100vh - 2 * var(--padding, 50px))' }}>

            <CoinHeader
               idModal={idModal}
               title='Select a coin'
               action={closeModal}
            />

            <TabButtons
               listButtons={listTabsProps}
               setClass='light'
               isActive={isActive}
               setIsActive={setIsActive}
            />

            <Search
               searchCoin={searchCoin}
            />

            <div className={styles['coins__select-swiper']}>
               <div
                  className={styles['coins__select-swiper-wrapper']}
                  style={{ '--offset': isActive - 1 }}
               >
                  {list.map((item, index) =>
                     <BlockchainList
                        key={index}
                        list={item}
                        activeCoin={activeCoin}
                     />
                  )}
               </div>

            </div>
         </div>
      </div >
   )
}

