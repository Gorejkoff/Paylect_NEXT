import React from "react";
import styles from './FirstScreenTitle.module.scss';

export default function FirstScreenTitle() {

   return (
      <section>
         <div className='container'>
            <h1 className={styles['first-screen__title']}>Your gateway to seamless crypto payments for business.</h1>
            <p className={styles['first-screen__subtitle']}>Discover the future of payments with our cutting-edge cryptocurrency payment solution.</p>
            <div className={styles['first-screen__line']} />
            <div className={styles['first-screen__footer']}>
               <span>©2024:V.1.0</span>
               <div className={styles['first-screen__scroll']}>
                  Scroll
                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M9.5 0.459961L9.5 18.0195H10.375L17.375 11.3528M1.75 10.7576L5.1875 14.0314" stroke="#F4F6F6" strokeWidth="5" />
                  </svg>
               </div>
            </div>
         </div>
      </section>
   )
}



