/*eslint-disable*/
import { Avatar, Button, Divider, List } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { red, volcano, gold, yellow, lime, green, cyan, blue, geekblue, purple, magenta, grey, } from '@ant-design/colors';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

export default function WorkList() {

   let navigate = useNavigate();
   let [val, setVal] = useState([]);
   useEffect(() => {
      axios.get('http://localhost:8080/workList')
         .then((res) => {
            // console.log(res.data)
            setVal(res.data);
            // console.log(typeof (val))
            // console.log(val)
            // console.log(val.length)
         })
         .catch(() => console.log('fail~!~!~!'));
   }, [])

   return (
      <div className='workList-container'>
         <h2 className='title'>Work List</h2>
         {
            typeof (val) == 'string' ? <div>Loading...</div> :
               <List
                  itemLayout="horizontal"
                  dataSource={val}
                  renderItem={(item, i) => (
                     <List.Item className='list-item' onClick={()=>{navigate(`/detail/${item.post_id}`)}}>
                        <List.Item.Meta
                           title={item.post_work}
                           description={item.date}
                        />
                        <Button className='btn' type='primary'>수정</Button>
                        <Button className='btn' type='danger'>삭제</Button>
                     </List.Item>
                  )}
               />
         }
      </div>
   )
}