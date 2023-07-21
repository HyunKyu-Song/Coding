/*eslint-disable*/

import { useState } from 'react';
import './App.css';
import { create } from 'zustand';

const useStore = create((set)=>({
  cnt : 0,
  PlusLikes(){
    set((state) => ({cnt : state.cnt + 1}))
  },
  MinusLikes(){
    set((state) => ({cnt : state.cnt - 1}))
  }
}))


function App() {
  const {cnt, PlusLikes, MinusLikes} = useStore();

  return (
    <div>
      <div>
        App에 있는 값: {cnt}
      </div>
      <button onClick={()=>{PlusLikes()}}>Plus</button> <button onClick={()=>{MinusLikes()}}>Minus</button>
      <Likes/>
    </div>
  );
}

function Likes(){
  let [likes, setLikes] = useState('🤍');
  let [n, setN] = useState(0);
  const {cnt, PlusLikes, MinusLikes} = useStore();
  return(
    <div className='card-container'>
      <div className='card'>
        <h2>Likes Component에 있는 값</h2>
        <button className='btn' onClick={() => {
          if (n == 0) {
            setLikes('💖');
            setN(1)
            PlusLikes();
          }
          else {
            setLikes('🤍');
            setN(0)
            MinusLikes();
          }
        }}>좋아요 {cnt} {likes}</button>
      </div>
    </div>
  )
}

export default App;
