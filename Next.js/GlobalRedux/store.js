'use client'

import { configureStore, createSlice } from "@reduxjs/toolkit"

const amount = createSlice({
   name: 'amount',
   initialState: [],
   reducers: {
      IncrementAmount(state, action) {
         state[action.payload] += 1;
      },
      DecrementAmount(state, action) {
         state[action.payload] -= 1;
      },
      AddAmount(state){
         state.push(1);
      },
      DeleteAmount(state, action){
         state.splice(action.payload, 1);
      }
   }
})

const cartList = createSlice({
   name: 'cartList',
   // initialState: [
   //    {
   //       id : 0,
   //       name: '비비고왕교자만두',
   //       price: 8800,
   //       tag: ['식료품', '냉동식품', '만두']
   //    },
   //    {
   //       id : 1,
   //       name: '바나나',
   //       price: 5000,
   //       tag: ['식료품', '과일']
   //    },
   //    {
   //       id : 2,
   //       name: '삼다수',
   //       price: 500,
   //       tag: ['생필품', '물']
   //    },
   //    {
   //       id : 3,
   //       name: '신라면',
   //       price: 850,
   //       tag: ['식료품', '라면']
   //    },
   //    {
   //       id : 4,
   //       name: '연세우유',
   //       price: 2000,
   //       tag: ['유제품', '우유']
   //    }],
   initialState : [],
   reducers: {
      AddProduct(state, action) {
         let cnt=0;

         state.map(function(item){
            if(item.id == action.payload.id){
               cnt++;
            }
         })

         if(cnt == 0){
            state.push(action.payload);
         }
      },
      DeleteProduct(state, action){
         state.splice(action.payload, 1);
      }
   }
})

const alertBox = createSlice({
   name : 'alertBox',
   initialState : false,
   reducers:{
      OnOff(state){
         if(state){
            return false;
         }
         else{
            return true;
         }
      }
   }
})

export default configureStore({
   reducer: {
      amount: amount.reducer,
      cartList: cartList.reducer,
      alertBox: alertBox.reducer,
   }
})

export const { IncrementAmount, DecrementAmount, AddAmount, DeleteAmount } = amount.actions;
export const { AddProduct, DeleteProduct } = cartList.actions;
export const { OnOff } = alertBox.actions;