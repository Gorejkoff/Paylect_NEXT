import React from 'react';
import styles from './InfoCopy.module.scss';
import ButtonCopyText from './ButtonCopyText';
import ButtonCopy from '@/components/Buttons/ButtonCopy/ButtonCopy';
import ButtonQRCode from '@/components/Buttons/ButtonQRCode/ButtonQRCode';


export default function InfoCopy({ title, value, message, buttonQr, buttonCopy }) {

   return (
      <div className={styles['info-copy__body']}>

         <div className={styles['info-copy__content']}>
            <div className={styles['info-copy__title']}>{title}</div>
            <ButtonCopyText text={value} />
            {message && <div className={styles['info-copy__message']}>{message}</div>}
         </div>
         <div className={styles['info-copy__buttons']}>
            {buttonCopy && <ButtonCopy text={value} />}
            {buttonQr && <ButtonQRCode />}
         </div>

      </div>
   );
};

