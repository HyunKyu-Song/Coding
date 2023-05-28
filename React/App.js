/*eslint-disable*/
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  let [cnt, setCnt] = useState(0);
  let [check, setCheck] = useState(['apple', 'melon', 'banana', 'strawberry', 'mango']);
  var [b, setB] = useState(null);

  // useEffect(() => {
  //   axios.get('https://hyunkyu-song.github.io/GoodsShop/LESSERAFIM/LESSERAFIM.json')
  //     .then(res => {
  //       // setB(res.data)
  //       setB(res.data);
  //       console.log(b);

  //     })
  // }, [])

  return (
    <div>

      <nav>
        <li>START</li>
        <li>Record</li>
      </nav>

      <main>

        <div className='quiz'>

          <div className='question'>
            <p>나는 누구일까요?</p>
          </div>

          <div className='hint'>
            <ul>
              <li>그룹</li>
              <li>외국인</li>
              <li>🐰</li>
              {
                b == null ? <div>문제보기</div> : <Card ex={b}/>
              }
            </ul>
          </div>

          <div className='example'>
            <button onClick={() => {
              axios.get('https://hyunkyu-song.github.io/GoodsShop/LESSERAFIM/LESSERAFIM.json')
                .then(res => {
                  // setB(res.data)
                  setB(res.data);
                  console.log(b);
                })
            }}>버튼</button>
          </div>


        </div>

      </main>

    </div>
  );
}

function Card(props) {
  return (
    <>
      {
        props.ex.map(function(item, i){
          return(
            <li>{item.name}</li>
          )
        })
      }
    </>
  )
}

export default App;
