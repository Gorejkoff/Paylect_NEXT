import React from 'react';
import styles from '../Coins.module.scss';
import StandardSelect from './StandardSelect';
import { useSelector } from 'react-redux';


export default function CoinGrid({ props }) {
   const activeFormat = useSelector(state => state.coin[state.coin.direction.action + 'Format'].id)



   return (
      <div className={styles.coins__grid}>
         {props.map((item, index) => <StandardSelect key={index} props={item} activeFormat={activeFormat} />)}
      </div>
   );
};