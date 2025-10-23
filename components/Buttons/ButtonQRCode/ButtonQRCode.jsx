'use client'

import React from 'react';
import styles from '../Buttons.module.scss';
import useOpenModal from '@/store_redux/hooks/modalsHooks/useOpenModal';


export default function ButtonQRCode() {

   const openModal = useOpenModal('QRCode')

   return (
      <button
         className={styles['button-common-style__body']}
         type='button'
         aria-label='qr'
         onClick={openModal}
      >
         <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="25" r="25" fill="none" />
            <path d="M25.8916 13.46V24.2712H36.4239V13.46H25.8916ZM33.7789 21.5562H28.5347V16.175H33.7789V21.5562Z" fill="#595959" />
            <path d="M13 13.46V24.2712H23.5323V13.46H13ZM20.8873 21.5562H15.6449V16.175H20.8873V21.5562Z" fill="#595959" />
            <path d="M13 26.6356V37.4469H23.5323V26.6356H13ZM20.8873 34.7338H15.6449V29.3506H20.8873V34.7338Z" fill="#595959" />
            <path d="M28.5365 34.7394L25.8916 37.46H36.3818V29.3544H33.7369V34.7394H28.5365Z" fill="#595959" />
            <path d="M33.7369 26.6356H25.8916V34.7356H28.5365V29.3506H33.7369V29.33V26.6356Z" fill="#595959" />
            <path d="M29.8936 30.7512V33.3762H32.4508V30.7512H29.8936Z" fill="#595959" />
         </svg>
      </button>
   );
};