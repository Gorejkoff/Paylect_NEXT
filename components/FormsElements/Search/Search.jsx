'use ckient'

import React, { useRef } from 'react';
import styles from './Search.module.scss';


export default function Search() {

   const searchRef = useRef(null)

   function clearSearch() {
      searchRef.current.value = '';
   }

   return (
      <div className={styles.search__border}>
         <input
            type="text"
            name="search"
            placeholder="Search by coin"
            ref={searchRef}
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