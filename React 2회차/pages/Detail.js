/*eslint-disable*/

import { useNavigate, useParams } from "react-router-dom"
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, Row, Col, Button } from 'antd';

export default function Detail() {

   let { id } = useParams();
   let [val, setVal] = useState([]);
   let [real, setReal] = useState([]);
   let [show, setShow] = useState(false);
   let navigate = useNavigate();

   useEffect(() => {
      axios.get('http://localhost:8080/worklist')
         .then((res) => {
            setVal(res.data);
         })
         .catch(() => console.log('fail~!~!~!'));
   }, [])

   setTimeout(() => {

      function findId(element) {
         return element.post_id == id;
      }
      setReal(val.find(findId))

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
                     <h1 className="title">Detail Page</h1>
                  </Col>
                  <Col className="detail-content" span={12} offset={6}>
                     <p>글 id: {real.post_id}</p>
                     <p>할 일: {real.post_work}</p>
                     <p>날짜: {real.date}</p>
                     {/* <p>글 id: {val[id - 1].post_id}</p>
                     <p>할 일: {val[id - 1].post_work}</p>
                     <p>날짜: {val[id - 1].date}</p> */}
                     <Button onClick={() => {
                        navigate(`/update/${real.post_id}`);
                     }} className="btn" type="primary">수정</Button>
                     <Button onClick={() => {
                        // let id = parseInt(real.post_id);
                        axios.delete('http://localhost:8080/delete', {
                           data:{
                              post_id : `${real.post_id}`
                           }
                        })
                        .then((res)=>{console.log(res.data)})
                        .catch((err)=> console.log('에러!', err))
                        // 삭제는 되는데, 404 error 뜸
                     }} className="btn" type="danger">삭제</Button>
                  </Col>
               </Row>
         }
      </div>
   )
}