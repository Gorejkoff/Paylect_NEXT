import { configureStore } from '@reduxjs/toolkit';
import modalsSliceReducer from './modalsSlice';
import selectCoinReducer from './selectCoinSlice';


export default configureStore({
   reducer: {
      modals: modalsSliceReducer,
      coin: selectCoinReducer,
   }
})



