'use client'

import React, { useRef } from 'react';
import styles from './ExchangeInput.module.scss';
import useControlValueNumberInput from '@/hooks/forms/useControlValueNumberInput';

function setFocusToInput(event) {
   const input = event.target.querySelector('input');
   if (input) { input.focus() }
}

export default function ExchangeInput({ value }) {

   const ref = useRef(null);
   const controlValueInput = useControlValueNumberInput(ref)

   return (
      <div
         className={styles['exchange-input__value-body']}
         onClick={setFocusToInput}
      >
         <div className={styles['exchange-input__in-dollars']}>{value}</div>
         <div className={styles['exchange-input__value']}>
            <input
               ref={ref}
               type='text'
               name='value_currency'
               onChange={controlValueInput}
            />
         </div>
      </div>
   );
};