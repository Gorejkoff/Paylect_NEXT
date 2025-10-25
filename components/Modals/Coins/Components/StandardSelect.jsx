import React from 'react';
import styles from '../Coins.module.scss';
import useCloseModal from '@/store_redux/hooks/modalsHooks/useCloseModal';


export default function StandardkSelect({ name }) {

   const closeBlockchain = useCloseModal('blockchain');
   const closeStandard = useCloseModal('standard');


   return (
      <label className={styles.coins__select}
         onClick={() => {
            closeStandard();
            setTimeout(closeBlockchain, 300);
         }}
      >
         <span className={styles['coins__select-name']}>{name}</span>
         <span className={styles['coins__select-check']}>
            <input type="radio" name="blockchain" />
            <span></span>
         </span>
      </label>
   );
};