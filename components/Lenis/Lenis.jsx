'use client'

import React, { useEffect, useRef, createContext } from 'react';
import Lenis from "lenis";

export const LenisMethods = createContext();

export default function LenisWrapper({ children }) {

   /* плавная прокрутка Lenis */
   const documentHeight = useRef(null);
   const lenis = useRef(null);
   const doc_body = useRef(null);

   function raf(time) {
      lenis.current.raf(time);
      if (documentHeight.current !== doc_body.current.scrollHeight) {
         documentHeight.current = doc_body.current.scrollHeight;
         lenis.current.resize();
      }
      requestAnimationFrame(raf);
   }

   useEffect(() => {
      doc_body.current = document.body;
      lenis.current = new Lenis({
         // wheelMultiplier: 2,
         duration: 1.5,
         autoResize: true,
         // smoothTouch: false
      });

      documentHeight.current = doc_body.current.scrollHeight;
      requestAnimationFrame(raf);

      return () => lenis.current.destroy();
   });

   /* функция прокрутки по якорям */
   const scrollToAnchor = (n) => {
      lenis.current.scrollTo(n);
   };

   const lenisScrollStop = () => {
      if (lenis.current) lenis.current.stop();
   }
   const lenisScrollStart = () => {
      if (lenis.current) lenis.current.start();
   }

   const lenisMethods = {
      scrollToAnchor: scrollToAnchor,
      lenisScrollStop: lenisScrollStop,
      lenisScrollStart: lenisScrollStart
   }

   return (
      <LenisMethods.Provider value={lenisMethods}>
         {children}
      </LenisMethods.Provider>
   );
};