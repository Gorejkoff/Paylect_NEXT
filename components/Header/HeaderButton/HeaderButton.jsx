'use client'

import React from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';
import ButtonBorderAnimation from '@/components/Buttons/ButtonBorderAnimation/ButtonBorderAnimation';
import useOpenModal from '@/store_redux/hooks/modalsHooks/useOpenModal';


export default function HeaderButton() {
   const MIN1024 = useMediaQuery('(min-width: 1024px)');
   const openModalContact = useOpenModal('contacts');
   const openModalExchange = useOpenModal('exchange');

   return (
      <ButtonBorderAnimation
         action={MIN1024 ? openModalContact : openModalExchange}
         text={MIN1024 ? 'let’s get started' : 'exchange'}
         adaptive={true}
      />
   );
};