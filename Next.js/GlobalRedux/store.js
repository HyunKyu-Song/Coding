'use client'

import { configureStore, createSlice } from "@reduxjs/toolkit"

const amount = createSlice({
   name: 'amount',
   initialState: [],
   reducers: {
      // 삭제하명 수량이 이상해짐
      IncrementAmount(state, action) {
         state[action.payload] += 1;
      },
      DecrementAmount(state, action) {
         state[action.payload] -= 1;
      },
      AddAmount(state){
         state.push(1);
      }
   }
})

const cartList = createSlice({
   name: 'cartList',
   // initialState: [
   //    {
   //       name: '비비고왕교자만두',
   //       price: 8800,
   //       tag: ['식료품', '냉동식품', '만두']
   //    },
   //    {
   //       name: '바나나',
   //       price: 5000,
   //       tag: ['식료품', '과일']
   //    },
   //    {
   //       name: '삼다수',
   //       price: 500,
   //       tag: ['생필품', '물']
   //    },
   //    {
   //       name: '신라면',
   //       price: 850,
   //       tag: ['식료품', '라면']
   //    },
   //    {
   //       name: '연세우유',
   //       price: 2000,
   //       tag: ['유제품', '우유']
   //    }],
   initialState : [],
   reducers: {
      AddProduct(state, action) {
         state.push(action.payload);
      },
      DeleteProduct(state, action){
         state.splice(action.payload, 1);
      }
   }
})

export default configureStore({
   reducer: {
      amount: amount.reducer,
      cartList: cartList.reducer
   }
})

export const { IncrementAmount, DecrementAmount, AddAmount } = amount.actions;
export const { AddProduct, DeleteProduct } = cartList.actions;