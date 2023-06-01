/*eslint-disable*/
import { useState } from "react";
import { useParams } from "react-router-dom";

function Quiz(props) {
   // let [check, setCheck] = useState([]);
   // let [checkOrigin, setCheckOrigin] = useState(['white', 'white', 'white', 'white', 'white']);
   let [result, setResult] = useState(-1);
   let [correct, setCorrect] = useState(0);
   let [show, setShow] = useState('');
   let {id} = useParams();
   console.log(id);
   // let [문제번호, 문제번호변경] = useState(4);

   return (
      <div className='quiz'>

         <div className='question'>
            <p>문제{props.ex[props.문제번호].id + 1}. 나는 누구일까요❓</p>
         </div>

         <div className='hint'>
            {
               props.ex[props.문제번호].hint.map(function (item, i) {
                  return (
                     <li key={i}>{item}</li>
                  )
               })
            }
         </div>

         <div className='example'>
            {
               props.ex[props.문제번호].num.map(function (item, i) {
                  return (
                     <li style={{ backgroundColor: `${props.check[i]}` }} className={`num${i} ${props.check}`} value={i} onClick={function () {
                        let copy = [...props.checkOrigin];
                        copy[i] = 'coral';
                        props.setCheck(copy);
                        setResult(i);
                     }} key={i}>{i + 1}. {item}</li>
                  )
               })
            }
         </div>

         <div className={`submit ${show}`}>
            <button onClick={() => {
               setShow('hide');

               if (result == props.ex[props.문제번호].answer) {
                  alert('정답입니다~');
                  setCorrect(++correct);

               }
               else {
                  alert('오답입니다 ㅜㅜ');
               }

               // if (props.문제번호 == 4) {
               //    alert(`${correct}/5`);
               // }
               props.setAlert('show');

               setTimeout(() => {
                  if (props.문제번호 == 4) {
                     alert(`결과: ${correct} / 5`);
                  }
                  if (props.문제번호 < 4) {
                     props.setAlert('');
                     props.문제번호변경(props.문제번호 + 1);
                     let copy = [...props.checkOrigin];
                     props.setCheck(copy);
                     setShow('');
                  }
               }, 2000);

            }}>정답확인</button>
         </div>

      </div>
   )
}

export default Quiz;