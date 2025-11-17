import React from 'react';
import styles from '../Coins.module.scss';
import useCloseModal from '@/store_redux/hooks/modalsHooks/useCloseModal';
import useSetFormat from '@/store_redux/hooks/selectCoinHooks/useSetFormat';


export default function StandardkSelect(props) {
   const { activeFormat, ...otherProps } = props;
   const closeBlockchain = useCloseModal('blockchain');
   const closeStandard = useCloseModal('standard');
   const isActive = activeFormat == otherProps.props.id;
   const setFormat = useSetFormat(otherProps.props);


   return (
      <div className={`${styles.coins__select} ${isActive ? 'active' : ''}`}
         onClick={() => {
            closeStandard();
            setTimeout(closeBlockchain, 300);
            setFormat();
         }}
      >
         <span className={styles['coins__select-name']}>{otherProps.props.name}</span>
         <span className={styles['coins__select-check']}></span>
      </div>
   );
};