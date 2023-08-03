/*eslint-disable*/

import { useState } from 'react';
import './App.css';
import { create } from 'zustand';
import { Button, Row, Col, Space, Alert } from 'antd';
import styled from "styled-components"

const MainBtn = styled(Button)`
  background-color : blue;
  color : white;
  margin : 10px;
  border-radius : 15px;
  `;

const useStore = create((set) => ({
  cnt: 0,
  PlusLikes() {
    set((state) => ({ cnt: state.cnt + 1 }))
  },
  MinusLikes() {
    set((state) => ({ cnt: state.cnt - 1 }))
  },
  WantPlus(n) {
    set((state) => ({ cnt: state.cnt + n }))
  }
}))


function App() {
  const { cnt, PlusLikes, MinusLikes, WantPlus } = useStore();

  return (
    <div>
      <Row className='box-container' justify={'center'}>
        <Col className='box' span={5}>span 5</Col>
        <Col className='box' span={6}>span 6</Col>
        <Col className='box' span={3}>span 3</Col>
        <Col className='box' span={7}>span 7</Col>
      </Row>
      <div>
        App에 있는 값: {cnt}
      </div>
      <button onClick={() => { PlusLikes() }}>Plus</button> <button onClick={() => { MinusLikes() }}>Minus</button>
      <button onClick={() => { WantPlus(4) }}>원한다</button>
      <Likes />
    </div>
  );
}

function Likes() {
  let [likes, setLikes] = useState('🤍');
  let [n, setN] = useState(0);
  const { cnt, PlusLikes, MinusLikes } = useStore();
  return (
    <div className='card-container'>
      <div className='card'>
        <Button style={{backgroundColor:'coral', color:'white'}}>custom Button</Button>
        <Button type="primary">Primary Button</Button>
        <MainBtn>styled-component</MainBtn>
        <Alert type='info' message="Info"></Alert>
        <Alert type='success' message="Success"></Alert>
        <Alert type='warning' message="Warning"></Alert>
        <Alert type='error' message="Error"></Alert>
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
