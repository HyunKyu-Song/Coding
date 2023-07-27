/*eslint-disable*/

import { useParams } from "react-router-dom"
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Form, Input, Row, Col, Button } from 'antd';

export default function Update() {

   let { id } = useParams();
   let [val, setVal] = useState([]);
   let [real, setReal] = useState([]);
   let [show, setShow] = useState(false);
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
               <div className='form-container'>
                  <h2 className='title'>Update Work</h2>
                  <form action='http://localhost:8080/update' method='POST'>
                     <Row style={{display:'none'}}>
                        <Col span={12} offset={6}>
                           <Form.Item>
                              <Input className='input' name='post_id' defaultValue={real.post_id} ></Input>
                           </Form.Item>
                        </Col>
                     </Row>

                     <Row>
                        <Col span={12} offset={6}>
                           <Form.Item>
                              <Input className='input' name='work' defaultValue={real.post_work}></Input>
                           </Form.Item>
                        </Col>
                     </Row>

                     <Row>
                        <Col span={12} offset={6}>
                           <Form.Item>
                              <Input className='input' name='date' disabled='true' defaultValue={`Date: ${real.date}`}></Input>
                           </Form.Item>
                        </Col>
                     </Row>

                     <Form.Item style={{ textAlign: 'center' }} wrapperCol={{ offset: 0, }}>
                        <Button className='btn' type="primary" htmlType="submit">수정</Button>
                     </Form.Item>
                  </form>
               </div>
         }
      </div>
   )
}