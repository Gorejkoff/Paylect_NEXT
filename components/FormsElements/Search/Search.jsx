'use ckient'

import React, { useState } from 'react';
import styles from './Search.module.scss';


export default function Search({ searchCoin }) {

   const [value, setValue] = useState('');

   const setInputValue = (event) => {
      setValue(event.target.value);
      searchCoin(event.target.value);
   };
   const clearSearch = () => {
      setValue('');
      searchCoin('');
   }
   return (
      <div className={styles.search__border}>
         <input
            value={value}
            type="text"
            name="search"
            placeholder="Search by coin"
            onChange={setInputValue}
         />

         <button
            className={styles.search__button}
            type='button'
            onClick={clearSearch}
         >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M2.16463 1.25004L38.75 38.75M1.25 38.75L37.8354 1.25" stroke="#848484" />
            </svg>
         </button>
      </div>
   );
};