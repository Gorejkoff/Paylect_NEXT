import React from 'react';
import styles from '../Coins.module.scss';
import StandardSelect from './StandardSelect';

export default function CoinGrid({ props }) {

   return (
      <div className={styles.coins__grid}>
         {props.map((item, index) => <StandardSelect key={index} name={item.name} />)}
      </div>
   );
};