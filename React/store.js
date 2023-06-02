import { configureStore, createSlice } from '@reduxjs/toolkit'

let reSet = createSlice({
   name : 'reSet',
   initialState : 0,
   reducers : {
      ChangeReSet(state){
         if(state){
            return 0;
         }
         else{
            return 1 
         }
      }
   }
})

let score = createSlice({
   name : 'score',
   initialState : 0,
   reducers : {
      PlusScore(state){
         return state+1;
      },
      ResetScore(){
         return 0;
      }
   }
})

let quizNum = createSlice({
   name : 'quizNum',
   initialState : 0,
   reducers : {
      PlusQuizNum(state){
         return state+1;
      },
      ResetQuizNum(){
         return 0;
      }
   }
})

let answerAlert = createSlice({
   name : 'answerAlert',
   initialState : 'show',
   reducers : {
      setAlertBox(state){
         if(state){
            return '';
         }
         else if (state === ''){
            return 'show';
         }
      }
   }
})

let writeAnswer = createSlice({
   name : 'writeAnswer',
   initialState : [-1, -1, -1, -1, -1],
   reducers : {
      ResetWriteAnswer(state){
         for(let i = 0; i < 5; i++){
            state[i] = -1;
         }
      },
      ChangeWriteAnswer(state, action){
         state[action.payload[0]] = action.payload[1];
      }
   }
})

export default configureStore({
   reducer: {
      reSet: reSet.reducer,
      score: score.reducer,
      quizNum : quizNum.reducer,
      answerAlert : answerAlert.reducer,
      writeAnswer : writeAnswer.reducer,
   }
})

export let {ChangeReSet} = reSet.actions;
export let {PlusScore, ResetScore} = score.actions;
export let {PlusQuizNum, ResetQuizNum} = quizNum.actions;
export let {setAlertBox} = answerAlert.actions;
export let {ResetWriteAnswer, ChangeWriteAnswer} = writeAnswer.actions;
