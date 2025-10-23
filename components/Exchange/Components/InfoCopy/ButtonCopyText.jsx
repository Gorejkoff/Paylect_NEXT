'use client'
import React from 'react';
import useCopyToClipboardText from '@/hooks/useCopyToClipboardText';
import styles from './InfoCopy.module.scss';

export default function ButtonCopyText({ text }) {
   const copyToClipboardText = useCopyToClipboardText(text);
   return (
      <button
         type='button'
         aria-label='copy'
         onClick={copyToClipboardText}
      >
         <span className={styles['info-copy__value']}>{text}</span>
      </button>
   );
};