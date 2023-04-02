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
         function findName(element) {
            if (element.name === action.payload.name) {
               return true;
            }
         }

         if (state.find(findName) === undefined) {
            state.push(action.payload);
         }
         // state.push(action.payload);
         console.log(`action.payload.name = ${action.payload.name}`);
         console.log(`state = ${state[0].name}`);
         console.log(`(state.find(findName) = ${state.find(findName)}`)
      },
      plusCnt(state, action) {
         if(state[action.payload].count < 10){
            state[action.payload].count += 1;
         }
         console.log(`id = ${state[action.payload].id}`);
         console.log(`groupid = ${state[action.payload].group_id}`);
      },
      minusCnt(state, action) {
         if(state[action.payload].count > 0){
            state[action.payload].count -= 1;
         }
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