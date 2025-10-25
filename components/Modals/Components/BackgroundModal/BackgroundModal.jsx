'use client'

import React, { useRef, useEffect, useContext } from 'react';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
import animationModal from '@/components/Modals/AnimationModal';
import modalStyles from '@/components/Modals/Modals.module.scss';
import useCloseModal from '@/store_redux/hooks/modalsHooks/useCloseModal';
import { LenisMethods } from '@/components/Lenis/Lenis';



const animationBackground = {
   visible: {
      top: 0,
      transition: "top 1s cubic-bezier(.77,0,.175,1)",
   },
   hidden: {
      top: "-120vh",
      transition: "top 1s 0.1s cubic-bezier(.77,0,.175,1)",
   },
};


export default function BackgroundModal({
   children,
   id,
   opacity,
   dependence
}) {
   const ref = useRef();
   const closeModal = useCloseModal(id);
   const isOpen = useSelector(state => state.modals[id].isOpen);
   const lenisMethods = useContext(LenisMethods);

   // disable scrolling 'dependence={true}'
   // or pass a custom dependence
   useEffect(() => {
      if (isOpen) lenisMethods.lenisScrollStop();
      if (!isOpen && !document.querySelector('.modal-is-open')) lenisMethods.lenisScrollStart();
      ref.current.scrollTo({
         top: 0,
         behavior: 'smooth'
      });
   }, [dependence, isOpen]);

   return (
      <div
         id={id}
         className={`${styles.background} ${isOpen ? 'modal-is-open' : ''}`}
      >
         <div className={styles.background__layer}
            style={isOpen ? animationBackground.visible : animationBackground.hidden}
         />
         <div className={`${modalStyles.modal__wrapper} ${opacity ? modalStyles.modal__opacity : ''}`}
            ref={ref}
            id={id}
            data-lenis-prevent
            style={animationModal(isOpen)}
            onClick={(event) => { if (!event.target.closest('.modal-body')) closeModal() }}
         >
            {children}
         </div>
      </div>

   );
};