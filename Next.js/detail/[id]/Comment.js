'use client'

import { useEffect, useState } from "react"

export default function Comment(props) {
   let [comment, setComment] = useState('');
   let [comment2, setComment2] = useState([]);
   let [good, setGood] = useState(0);

   // useEffect(() => {
   //    fetch('/api/loadment')
   //       .then(res => res.json())
   //       .then(function (data) {
   //          console.log(data);
   //          setComment2(data);
   //       })
   //       .catch(function (error) {
   //          console.log(error);
   //       })
   // }, [])

   return (
      <>
         <div>
            {/* <h3 style={{ marginTop: '40px' }}>댓글</h3>
            {
               comment2.length > 0 ?
               comment2.map(function (item, i) {
                  return (
                     <div key={i} style={{ marginBottom: '20px' }}>
                        no.{i + 1}
                        <p>{item.content}</p><hr />
                     </div>
                  )
               })
               : 'Loading....'
            } */}
            <h3 style={{marginTop:'40px', cursor:'pointer'}} onClick={()=>{
               setGood(good+1)
            }}>좋아요 ❤ {good}</h3>
            <h3>댓글 {props.ment.length}</h3>
            {
               props.ment.map(function (item, i) {
                  return (
                     <div key={i} style={{ marginBottom: '20px' }}>
                        no.{i+1}
                        <p>작성자: {item.mentWriter}</p>
                        <p>{item.content}</p><hr/>
                     </div>
                  )
               })
            }
            <input onInput={(e) => {
               setComment(e.target.value);
            }} /> <button onClick={() => {
               if(props.mentWriter != '비회원'){
                  fetch('/api/ment', {
                     method: 'POST',
                     body: JSON.stringify({ parent: props.parent, comment: comment, writer: props.writer, mentWriter: props.mentWriter }),
                  })
                  // .then(res=>res.json())
                  // .then(function(data){
                  //    // console.log('받은 data: ');
                  //    // console.log(data);
                  //    setComment2(data);
                  //    // let copy = [...comment2];
                  //    // copy.push(data);
                  //    // setComment2(copy);
                  // })
                  location.reload();
               }
               else{
                  alert('로그인 후 댓글을 작성할 수 있습니다.');
               }
            }}>댓글전송</button>
         </div>
      </>
   )
}