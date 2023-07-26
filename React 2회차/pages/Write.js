/*eslint-disable*/

import { Row, Col, Button, Checkbox, Form, Input } from 'antd';

export default function Write() {

   return (
      <div className='form-container'>
         <h2 className='title'>Today Work?</h2>
         <form action='http://localhost:8080/add' method='POST'>
            <Row>
               <Col span={12} offset={6}>
                  <Form.Item>
                     <Input className='input' name='work' placeholder='ex) 운동하기'></Input>
                  </Form.Item>
               </Col>
            </Row>

            <Row>
               <Col span={12} offset={6}>
                  <Form.Item>
                     <Input className='input' name='date' placeholder='ex) 2023-07-25'></Input>
                  </Form.Item>
               </Col>
            </Row>

            <Form.Item style={{ textAlign: 'center' }} wrapperCol={{ offset: 0, }}>
               <Button className='btn' type="primary" htmlType="submit">저장</Button>
            </Form.Item>
         </form>
      </div>
   )
}