/*eslint-disable*/
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ChangeReSet, ChangeWriteAnswer, PlusQuizNum, PlusScore } from "./store";

function Quiz(props) {
   // let [check, setCheck] = useState([]);
   // let [checkOrigin, setCheckOrigin] = useState(['white', 'white', 'white', 'white', 'white']);
   let [result, setResult] = useState(-1);
   let [correct, setCorrect] = useState(0);
   let [show, setShow] = useState('');
   let [alertShow, setAlertShow] = useState('');
   let { id } = useParams();

   let data = useSelector((state) => { return state })
   let dispatch = useDispatch();

   console.log(data.quizNum);
   console.log(data.writeAnswer);

   // useEffect(()=>{
   //    if(data.reSet == 1 && result != -1){
   //       setResult(-1)
   //       setCorrect(0)
   //       ChangeReSet()
   //    }
   // }, )
   // console.log(result, correct);


   // console.log(id);
   // let [문제번호, 문제번호변경] = useState(4);

   return (
      <div className='quiz'>

         <div className={`quizAlert ${alertShow}`}>
            <h2>📋결과 [ {data.score} / 5 ]</h2>
            {/* <p>[ {data.score} / 5 ]</p> */}
            <h2 style={{fontSize:'2rem'}}>🎯 정답공개 (작성답안 / 답)</h2>
            {
               props.ex.map(function(item, i){
                  return(
                     <p>
                        {item.num[data.writeAnswer[i]] == item.num[item.answer] ? <span>⭕</span> : <span>❌</span>} {i+1}. {item.num[data.writeAnswer[i]]} / {item.num[item.answer]}
                     </p>
                  )
               })
            }
         </div>

         <div className='question'>
            {/* {
               props.문제번호 == 4 ? <button onClick={() => {
                  console.log(data.score);
                  alert(`결과: ${data.score} / 5`);
               }}>맞힌 개수</button> : null
            }
            {data.score} */}
            {/* <p>문제{props.ex[props.문제번호].id + 1}. 나는 누구일까요❓</p> */}
            <p>문제{props.ex[data.quizNum].id + 1}. 나는 누구일까요❓</p>
         </div>

         <div className='hint'>
            {
               props.ex[data.quizNum].hint.map(function (item, i) {
                  return (
                     <li key={i}>{item}</li>
                  )
               })
            }
         </div>

         <div className='example'>
            {
               props.ex[data.quizNum].num.map(function (item, i) {
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

               setTimeout(() => {
                  if (data.quizNum == 4) {
                     setAlertShow('show');
                  }
                  if (data.quizNum < 4) {
                     props.setAlert('');
                     // props.문제번호변경(props.문제번호 + 1);
                     dispatch(PlusQuizNum())
                     let copy = [...props.checkOrigin];
                     props.setCheck(copy);
                     setShow('');
                  }
               }, 10);

               if (result == props.ex[data.quizNum].answer) {
                  dispatch(PlusScore())
                  // alert('⭕정답입니다👍');
                  setCorrect(++correct);
               }
               else {
                  // alert('❌오답입니다😡');
               }

               // if (props.문제번호 == 4) {
               //    alert(`${correct}/5`);
               // }
               props.setAlert('show');
               dispatch(ChangeWriteAnswer([data.quizNum, result]))

            }}>정답확인</button>
         </div>

      </div>
   )
}

export default Quiz;