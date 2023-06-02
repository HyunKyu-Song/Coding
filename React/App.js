/*eslint-disable*/
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa4, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';

import Quiz from './Quiz.js';
import Menu from './Menu';
import Category from './Category';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeReSet, PlusScore, ResetQuizNum, ResetScore, ResetWriteAnswer} from './store';

function App() {
  let [data, setData] = useState(null);
  let [showArrow, setShowArrow] = useState('');
  let [num, setNum] = useState(0);
  let [check, setCheck] = useState([]);
  let [checkOrigin, setCheckOrigin] = useState(['white', 'white', 'white', 'white', 'white']);
  let [alert, setAlert] = useState('');
  let navigate = useNavigate();
  let a = useSelector((state) => { return state })
  console.log(a);

  let dispatch = useDispatch();

  return (
    <div>

      <nav>
        {/* <button onClick={()=>{dispatch(ChangeReSet())}}>{a.reSet}</button>
        <button onClick={()=>{dispatch(PlusScore())}}>{a.score}</button> */}
        <li onClick={() => {
          navigate('/peopleQuiz')
          axios('https://hyunkyu-song.github.io/game/quizData.json')
            .then(res => {
              console.log(res.data);
              setData(res.data);
              setShowArrow('show ')
            })
        }}>START</li>
        <li onClick={() => {
          navigate('/')
          // dispatch(ChangeReSet())
          dispatch(ResetScore())
          dispatch(ResetQuizNum())
          dispatch(ResetWriteAnswer())
          console.log(a.score)
          // location.reload();
        }}>Reset</li>
      </nav>

      {/* <div className={`alert-answer ${alert}`}>
        정답: {data == null ? null : data[num].answer + 1}
      </div> */}

      <Routes>
        <Route path='/' element={<Menu />} />


        <Route path='/peopleQuiz/category' element={<Category setData={setData} setShowArrow={setShowArrow} />} />


        <Route path='/peopleQuiz/:id' element={
          <div>
            {
              data == null ?
                null :
                <Quiz ex={data} 문제번호={num} 문제번호변경={setNum} check={check} setCheck={setCheck} checkOrigin={checkOrigin} setAlert={setAlert} />
            }
          </div>
        } />


        <Route path='/c' element={<div className='a'>3</div>} />
        <Route path='/d' element={<div className='a'>4</div>} />
        {/* <Route path='/peopleQuiz/:id' element={<div><h2>맞나?</h2></div>} /> */}
      </Routes>

      <main>

        {/* <menu className='menu-container'>
          <li onClick={() => {
            navigate('/peopleQuiz')
            axios('https://hyunkyu-song.github.io/game/quizData.json')
              .then(res => {
                console.log(res.data);
                setData(res.data);
                setShowArrow('show ')
              })
          }}>인물퀴즈 글ver</li>
          <li>인물퀴즈 사진ver</li>
          <li>게임3</li>
          <li>게임4</li>
        </menu> */}

        {/* <div className='start'>START Click🖱!</div> */}


        {/* <FontAwesomeIcon onClick={() => {
          if (num != 0) {
            setNum(num - 1);
            let copy = [...checkOrigin];
            setCheck(copy);
            setAlert('');
          }
        }} className={`${showArrow} arrow left`} icon={faCaretLeft} />

        <FontAwesomeIcon onClick={() => {
          if (num < 4) {
            setNum(num + 1);
            let copy = [...checkOrigin];
            setCheck(copy);
            setAlert('');
          }
        }} className={`${showArrow} arrow right`} icon={faCaretRight} /> */}

        {/* {
          data == null ?
            <div className='start'>START Click🖱!</div> : <Quiz ex={data} 문제번호={num} 문제번호변경={setNum} check={check} setCheck={setCheck} checkOrigin={checkOrigin} setAlert={setAlert} />
        } */}
        {/* <div className='quiz'>

          <div className='question'>
            <p>나는 누구일까요?</p>
          </div>

          <div className='hint'>
            <ul>
              <li>그룹</li>
              <li>외국인</li>
              <li>🐰</li>
            </ul>
          </div>

          {
            data == null ? 
            <div className='example'>START를 눌러주세요</div> : <Card ex={data}/>
          }


        </div> */}

      </main>

    </div>
  );
}

export default App;
