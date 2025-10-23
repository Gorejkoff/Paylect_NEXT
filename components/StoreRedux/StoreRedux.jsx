'use client'

import React from 'react';
import storeRedux from '@/store_redux'
import { Provider } from 'react-redux';

export default function StoreRedux({ children }) {

   return (
      <Provider store={storeRedux}>
         {children}
      </Provider>
   );
};