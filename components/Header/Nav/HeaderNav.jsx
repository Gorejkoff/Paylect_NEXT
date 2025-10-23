import React from 'react';
import styles from './HeaderNav.module.scss';
import dataNav from '@/json/data/nav_anhors.json'
import LinkTextAnimated from '@/components/Buttons/LinkTextAnimated/LinkTextAnimated';

export default function HeaderNav() {

   return (
      <nav className={styles['header-nav']}>
         <ol className={styles['header-nav__list']}>
            {dataNav.map((item, index) =>
               <li key={index}>
                  <LinkTextAnimated props={item} />
               </li>
            )}
         </ol>
      </nav>
   );
};