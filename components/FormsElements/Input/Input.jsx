'use client'

import { React, useEffect, useRef, useState } from 'react';
import styles from '../Form.module.scss';
import { motion, useInView } from 'framer-motion';
import useValidateTest from '@/hooks/forms/useValidateTest';
import useMediaQuery from '@/hooks/useMediaQuery';



const variantsH = {
   hide: {
      width: 0,
      transition: {
         duration: 0.5,
         delay: 0.5
      }
   },
   show: {
      width: '100%',
      transition: {
         duration: 0.5
      }
   }
}
const variantsV = {
   hide: {
      height: 0,
      transition: {
         duration: 0.5

      }
   },
   show: {
      height: '100%',
      transition: {
         duration: 0.5,
         delay: 0.5
      }
   }
}


export default function Input({ tag, ref, type, id, className, name, placeholder, required, disabled, regexp, action }) {

   const reg = new RegExp(regexp)
   const media768 = useMediaQuery('(min-width: 768px)');
   const trigger = useRef(null);
   const isInView = useInView(trigger, { amount: 1, once: !media768.matches });
   const field = useRef(null);
   const validateTest = useValidateTest();
   const [valid, setValid] = useState(true);


   function validate() {
      if (validateTest(field.current.value, reg)) {
         setValid(true);
         return;
      }
      setValid(false);
   }

   useEffect(() => {
      if (typeof ref === 'object') {
         ref.current = field.current;
      }
   })

   const Tag = tag ? tag : 'input'

   return (
      <div className={`${styles.input__body} ${className ? className : ''} ${valid ? '' : 'not-valid'}`}
         ref={trigger}
      >
         <Tag
            ref={field}
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            onChange={(event) => {
               regexp && validate();
               action && action(event);
            }}
         />

         <div className={styles.input__line}>
            <motion.div
               className={`${styles['input__bottom-line']} line`}
               variants={variantsH}
               initial='hid'
               animate={isInView ? 'show' : 'hide'}
            />
            <motion.div
               className={`${styles['input__side-line']} line`}
               style={{ right: 0 }}
               variants={variantsV}
               initial='hid'
               animate={isInView ? 'show' : 'hide'}
            />
            <motion.div
               className={`${styles['input__side-line']} line`}
               style={{ left: 0 }}
               variants={variantsV}
               initial='hid'
               animate={isInView ? 'show' : 'hide'}
            />
         </div>

      </div>
   )

}