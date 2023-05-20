'use client'

import Link from "next/link";

export default function ListItem(props) {
   return (
      <div className="list-container">
         <h2 className="list-title">List of writings</h2>
         {
            props.result.map(function (item, i) {
               return (
                  <div className="list-item" key={i}>
                     <p><strong>No.{item.num}</strong></p>
                     <Link href={`/detail/${item._id}`}><h3>{item.title}</h3></Link>
                     <p>{item.content}</p>
                     {/* <DetailLink/> */}
                     <Link href={`/update/${item._id}`} style={{ padding: '5px', borderRadius: '5px', backgroundColor: '#303030', color: '#ffcd4a' }}>Update✍ </Link>
                     <span onClick={function(e){
                        fetch('/api/delete', {
                           method : 'DELETE',
                           body : item._id,
                           // body : item.writer,
                        })
                        .then(res => {
                           if(res.status != 500){
                              e.target.parentElement.classList.add('fadeOut')
                              setTimeout(()=>{
                                 // e.target.parentElement.style.display = 'none';
                                 location.reload();
                              }, 500)
                              console.log('성공')
                           }
                           else{
                              alert('해당 작성자만 삭제가능');
                              console.log('삭제실패')
                              console.log(res)
                           }
                        })
                        .catch(err => console.log(err))

                        // GET 요청으로 삭제기능 구현
                        // fetch(`/api/delete?_id=${item._id}`)
                        // .then(res => {
                        //    console.log('success');
                        //    e.target.parentElement.classList.add('fadeOut')
                        //    setTimeout(()=>{
                        //       e.target.parentElement.style.display = 'none';
                        //    }, 500)
                        // })

                     }} style={{ padding: '5px', borderRadius: '5px', backgroundColor: '#303030', color: '#ffcd4a', marginLeft: '5px', cursor: 'pointer' }}>Delete🔥</span>
                  </div>
               )
            })
         }
      </div>
   )
}