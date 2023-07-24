/*eslint-disable*/

import { Button, Card } from "antd";
import ModalBox from "./ModalBox";
import { useState } from "react";

export default function Practice() {

   let [title, setTitle] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학']);
   let [likes, setLikes] = useState([0, 0, 0]);
   let [num, setNum] = useState(0);
   let [show, setShow] = useState('');

   return (
      <div>
         <div className="black-nav">
            <div>개발 blog</div>
            <Button onClick={() => {
               let copy = [...title];
               copy.sort();
               setTitle(copy);
            }} className="btn" type="primary">정렬</Button>
         </div>

         <div className="App">
            {
               title.map((item, i) => {
                  return (
                     <Card onClick={() => {
                        if (show == '') setShow('show');
                        else setShow('')
                        setNum(i);
                     }} key={i} title={title[i]} style={{ width: 300 }}>
                        <h4><Button onClick={() => {
                           let copy = [...likes];
                           copy[i] += 1;
                           setLikes(copy);
                        }} type="danger" className="btn">좋아요 {likes[i]} ❤</Button></h4>
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