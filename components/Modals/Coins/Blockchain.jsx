import React from 'react';
import BackgroundModal from '../Components/BackgroundModal/BackgroundModal';
import stylesModal from '../Modals.module.scss';
import styles from './Coins.module.scss';
import Blockchain from './Components/Blockchain';
import StandardDesktop from './Components/StandardDesktop';


const id = 'blockchain';

export default function BlockchainCoins() {


   return (
      <BackgroundModal id={id}>
         <div className={stylesModal.modal__scroll}>
            <div className={stylesModal.modal__container}>
               <div className={styles.coins__shell}>
                  <StandardDesktop />
                  <Blockchain />
               </div>
            </div>
         </div>
      </BackgroundModal>
   );
};