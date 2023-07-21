/*eslint-disable*/
import { useState } from 'react';
import './App.css';
import { create } from 'zustand';

const useStore = create((set)=>({
  a : 10,
  b: 20,
  Plus(){
    set((state)=> ({a : state.a + 10}))
  }
}))

// const useStore = create(function () {
//   return {
//     a: 10,
//     b: 20
//   }
// })

function App() {
  let [num, setNum] = useState(0);
  const { a, b, Plus } = useStore();

  return (
    <div>
      <div>{a}</div>
      <button onClick={() => {
        // setNum(num + b)
        // useStore.setState({a : a-1})
        // useStore.setState({b : b-2})
        Plus()
        console.log(a)
      }}>좋아요 {num}</button>
      <div>
        <Card/>
      </div>
    </div>
  );
}

function Card() {
  const {a, b, Plus} = useStore();
  return (
    <div>Card !! {b}</div>
  )
}

export default App;
