import { createSlice } from '@reduxjs/toolkit';

const selectCoinSlice = createSlice({
   name: 'coin',
   initialState: {
      send: {
         id: '1',
         name: 'Bitcoin',
         token: 'btc',
         category: 'crypto',
         img: './icon_currency/btc-icon.svg',
         badge: './icon_currency/btc-badge.svg',
         type: 'send'
      },
      get: {
         id: '2',
         name: 'Ethereum',
         token: 'eth',
         category: 'crypto',
         img: './icon_currency/eth-icon.svg',
         badge: './icon_currency/eth-badge.svg',
         type: 'get'
      },
      sendFormat: {
         id: 1,
         name: 'trc20'
      },
      getFormat: {
         id: 2,
         name: 'ERC20'
      },
      direction: {
         action: 'send' // 'send/get'
      }
   },
   reducers: {
      setCoin: (state, action) => {
         state[state.direction.action] = action.payload;
      },
      changeDirection: (state, action) => {
         state.direction.action = action.payload;
      },
      setFormat: (state, action) => {
         state[state.direction.action + 'Format'] = action.payload;
      }
   }
})


export const { setCoin, setFormat, changeDirection } = selectCoinSlice.actions;
export default selectCoinSlice.reducer;