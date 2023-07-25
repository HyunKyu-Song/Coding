/*eslint-disable*/

import { Button, Checkbox, Form, Input } from 'antd';
import { useState } from 'react';

export default function Write() {
   let [work, setWork] = useState('');
   const onFinish = (values) => {
      console.log('Success:', values);
   };
   const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
   };

   return (
      <div className='form-container'>
         <h2 style={{textAlign:'center', margin:'50px 0'}}>오늘의 할 일은?</h2>
         <Form name="basic"
            labelCol={{
               span: 7,
            }}
            wrapperCol={{
               span: 10,
            }}
            initialValues={{
               remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
         >
            <Form.Item
               label="할 일"
               name="username"
               rules={[
                  {
                     required: true,
                     message: '할 일을 적어주세요.',
                  },
               ]}
            >
               <Input className='input' placeholder='ex) 운동하기'></Input>
            </Form.Item>

            <Form.Item
               label="날짜"
               name="password"
               // rules={[
               //    {
               //       required: true,
               //       message: 'Please input your password!',
               //    },
               // ]}
            >
               <Input className='input' placeholder='ex) 2023-07-25'></Input>
               {/* <Input.Password /> */}
            </Form.Item>

            <Form.Item style={{textAlign:'center'}} wrapperCol={{offset: 0,}}>
               <Button className='btn'  type="primary" htmlType="submit">저장</Button>
            </Form.Item>
            
         </Form>
      </div>
   )
}