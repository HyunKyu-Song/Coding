/*eslint-disable*/

import { useParams } from "react-router-dom"
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, Row, Col, Button } from 'antd';

export default function Detail() {

   let { id } = useParams();
   let [val, setVal] = useState([]);
   let [real, setReal] = useState([]);
   let [show, setShow] = useState(false);
   useEffect(() => {
      axios.get('http://localhost:8080/list')
         .then((res) => {
            setVal(res.data);
            console.log('res.data', res.data);
            console.log('val', val);
         })
         .catch(() => console.log('fail~!~!~!'));
   }, [])
   // 데이터 삭제 시 post_id는 전 값에 +1해주는데 id값은 idx순서라서 바이딩 잘못됨

   // async await으로 해볼 수 있을지도?

   setTimeout(() => {
      console.log('0.1초 뒤 val값: ', val);

      function findId(element) {
         return element.post_id == id;
      }
      setReal(val.find(findId))
      console.log(real);

      setTimeout(() => {
         setShow(true)
      }, 500);

   }, 500);

   return (
      <div>
         {
            show === false ? <div>Loading...</div> :
               // val === null ? <div>Loading...</div> :
               <Row>
                  <Col style={{ textAlign: 'center' }} span={12} offset={6}>
                     <h1>Detail Page</h1>
                  </Col>
                  <Col className="detail-content" span={12} offset={6}>
                     <p>글 id: {real.post_id}</p>
                     <p>할 일: {real.post_work}</p>
                     <p>날짜: {real.date}</p>
                     {/* <p>글 id: {val[id - 1].post_id}</p>
                     <p>할 일: {val[id - 1].post_work}</p>
                     <p>날짜: {val[id - 1].date}</p> */}
                     <Button onClick={() => {
                        console.log('val', val);
                     }} className="btn" type="primary">수정</Button>
                     <Button className="btn" type="danger">삭제</Button>
                  </Col>
               </Row>
         }
      </div>
   )
}