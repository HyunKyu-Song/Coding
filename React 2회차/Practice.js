/*eslint-disable*/

import { Button, Card, Input } from "antd";
import ModalBox from "./ModalBox";
import { useState } from "react";

export default function Practice() {

   let [title, setTitle] = useState(['김민지', '팜하니', '다니엘 마쉬', '강해린', '이혜인']);
   let [likes, setLikes] = useState([0, 0, 0, 0, 0]);
   let [num, setNum] = useState(0);
   let [show, setShow] = useState('');
   let [inp, setInp] = useState('');

   return (
      <div>
         <div className="black-nav">
            <div>개발 blog</div>
            <Button onClick={() => {
               let copy = [...title];
               copy.sort();
               setTitle(copy);
            }} className="btn" type="primary">정렬</Button>
            <div className="inp">
               <input style={{ color: 'black' }} onInput={(e) => {
                  setInp(e.target.value);
               }} />
               <Button onClick={() => {
                  let copy = [...title];
                  copy.push(inp);
                  setTitle(copy);

                  let copy2 = [...likes];
                  copy2.push(0);
                  setLikes(copy2);
               }} className="btn" type="primary">추가</Button>
            </div>
         </div>

         <img width={200} src="./img/album1.jpg" />
         
         <div className="App">
            {
               title.map((item, i) => {
                  return (
                     <Card onClick={() => {
                        if (show == '') setShow('show');
                        else setShow('')
                        setNum(i);
                     }} key={i} title={title[i]} style={{ width: 300 }}>
                        <h4><Button onClick={(e) => {
                           e.stopPropagation();
                           let copy = [...likes];
                           copy[i] += 1;
                           setLikes(copy);
                        }} type="danger" className="btn">좋아요 {likes[i]} ❤</Button> <Button onClick={(e) => {
                           e.stopPropagation();
                           let copy = [...title];
                           copy.splice(i, 1);
                           setTitle(copy);

                           let copy2 = [...likes];
                           copy2.splice(i, 1);
                           setLikes(copy2);
                        }} type="primary" className="btn">Delete</Button></h4>
                        <p>2월 17일 발행</p>
                     </Card>
                  )
               })
            }
         </div>

         <ModalBox show={show} title={title} num={num} />
      </div>
   )
}