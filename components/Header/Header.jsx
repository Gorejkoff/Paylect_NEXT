import React from 'react';
import styles from './Header.module.scss';
import HeaderLogo from './Logo/HeaderLogo';
import HeaderNav from './Nav/HeaderNav';
import HeaderButton from './HeaderButton/HeaderButton';


export default function Header() {

   return (
      <header>
         <div className='container'>
            <div className={styles.header__body}>
               <HeaderLogo />
               <div className={styles.header__menu}>
                  <HeaderNav />
                  <HeaderButton />
               </div>
            </div>
         </div>
      </header>
   );
};