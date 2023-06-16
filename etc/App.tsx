/*eslint-disable*/

import { useState } from 'react';
import './App.css';

function App() {
  let [cnt, setCnt] = useState<number>(0);
  let [data, setData] = useState([]);
  let [data2, setData2] = useState();
  return (
    <div className="App">
      <button onClick={()=>{
        fetch('https://hyunkyu-song.github.io/game/quizDataWoman.json')
        .then(function(data){
          return data.json();
        })
        .then(function(res){
          console.log(res)
          setData(res)
          // console.log(data);
        })
        .catch(function(){
          console.log('fail')
        })
      }}>버튼</button>
      <button onClick={()=>{
        // console.log(data2)
        setData2(data)
      }}>btn</button>
      { data2 ?? <div>loading...</div>}
    </div>
  );
}

export default App;
