import React from 'react';
import styles from '../../Modals.module.scss';
import CoinHeader from './CoinHeader';
import StandardGrid from './StandardGrid';
import standardList from '@/json/data/standard.json';

export default function Standard() {

   return (
      <div className={`${styles['modal__light-body']} modal-body network-list`}>
         <div className={styles['modal__light-padding']}>
            <CoinHeader
               title='Select network'
               idModal='standard'
            />
            <StandardGrid props={standardList} />
         </div>
      </div>
   );
};