/*eslint-disable*/
import { useState } from 'react';
import './App.css';

function App() {
  let [post, setPost] = useState(['LE SSERAFIM', 'NewJeans', 'Twice']);
  let [good, setGood] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ padding: '20px' }}>Blog</h4>
      </div>
      {
        post.map(function (item, i) {
          return (
            <div className="list" key={i}>
              <h4 onClick={()=>{
                setGood(good+1);
              }}>{item} <span>👍 {good}</span></h4>
              <p>3월 22일</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
