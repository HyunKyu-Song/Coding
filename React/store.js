import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
   name: 'user',
   initialState: 'Song',
   reducers: {
      changeName(state) {
         return state + 'apple'
      }
   }
})

let stock = createSlice({
   name: 'stock',
   initialState: [],
   reducers: {
      addGoods(state, action) {
         state.push(action.payload);
      },
      plusCnt(state, action) {
         state[action.payload].count += 1;
      },
      minusCnt(state, action) {
         state[action.payload].count -= 1;
      }
   }
})

export default configureStore({
   reducer: {
      user: user.reducer,
      stock: stock.reducer
   }
})

export let { changeName } = user.actions
export let { plusCnt, minusCnt, addGoods } = stock.actions