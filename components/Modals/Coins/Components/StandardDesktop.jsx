'use client'

import React from 'react';
import { useSelector } from 'react-redux';
import useMediaQuery from '@/hooks/useMediaQuery';
import Standard from './Standard';

const id = 'standard';

export default function StandardDesktop() {

   const MIN1024 = useMediaQuery('(min-width: 1024px)')
   const isOpen = useSelector(state => state.modals[id].isOpen);

   if (!MIN1024) return;

   return (
      <div style={{
         width: isOpen ? 'min(720px, 50%)' : 0,
         transition: 'width 0.3s'
      }} >
         <Standard />
      </div>
   );
};