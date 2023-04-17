/* eslint-disable */
import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
   state() {
      return {
         //데이터 보관하고 싶다면 여기에 작성
         //여기서는 데이터를 state라고 부름
         likes : [10, 20, 30],
         likesCnt : [0, 0 , 0],
         more:{},
      }
   },
   mutations :{
      setLikes(state, payload){
         if(state.likesCnt[payload] == 0){
            state.likes[payload]++;
            state.likesCnt[payload]++;
         }
         else if(state.likesCnt[payload] != 0){
            state.likes[payload]--;
            state.likesCnt[payload]--;
         }
      },
      setMore(state, payload){
         state.more = payload;
      }
   },
   actions:{
      moreData(context){//context는 $store라고 생각하면 됨. 그리고 작명은 자유인데 관습상 context라고 함
         axios.get('https://codingapple1.github.io/vue/more0.json')
         .then((result)=>{
            console.log(result.data);
            context.commit('setMore', result.data);
         })
      }
   }
})

export default store