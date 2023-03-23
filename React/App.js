/*eslint-disable*/
import { useState } from 'react';
import './App.css';

function App() {
  let [post, setPost] = useState(['Twice', 'LE SSERAFIM', 'NewJeans']);
  let [good, setGood] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [cnt, setCnt] = useState(0);
  let newPost = '';

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ padding: '20px' }}>Blog</h4>
      </div>
      {
        post.map(function (item, i) {
          return (
            <div className="list" key={i}>
              <h4 style={{ cursor: 'pointer' }} onClick={() => {
                setModal(!modal);
                setCnt(i);
              }}>{item}
                <span onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...good];
                  copy[i] += 1;
                  setGood(copy);
                }}> 👍 {good[i]}</span></h4>
              <p>3월 22일 <button onClick={()=>{
                let copy = [...post];
                copy.splice(i, 1);
                setPost(copy);
              }}>글삭제</button></p>
            </div>
          )
        })
      }
      <button onClick={() => {
        let copy = [...post];
        copy[0] = 'fromis9';
        setPost(copy);
      }}>버튼</button>
      <button onClick={() => {
        let copy = [...post];
        copy.sort();
        setPost(copy);
      }}>가나다순</button>

      <div>
        <input onChange={(e)=>{
          newPost = e.target.value;
        }}></input>
        <button onClick={()=>{
          let copy = [...post];
          copy.push(newPost);
          setPost(copy);
        }}>글추가</button>
      </div>

      {
        modal === true ? <Modal post={post} cnt={cnt} /> : null
      }
    </div>

  );
}

function Modal(props) {
  return (
    <>
      <div className="modal">
        <h4>{props.post[props.cnt]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  )
}

export default App;