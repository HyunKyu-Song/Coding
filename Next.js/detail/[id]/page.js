import { connectDB } from "@/util/database.js";
import { ObjectId } from "mongodb";
import Comment from "./Comment";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function Detail(props) {

   const client = await connectDB;
   const db = client.db("forum");
   let session = await getServerSession(authOptions);
   //console.log(session.user.userId)
   let result = await db.collection('post').findOne({ _id: new ObjectId(`${props.params.id}`) });
   // let ment = await db.collection('comment').findOne({parent: props.params.id});
   let ment = await db.collection('comment').find({ parent: props.params.id }).toArray()
   // console.log('start');
   // console.log(ment);
   // console.log('end');

   return (
      <div className="detail-container">
         <h2 className="detail-title">상세정보</h2>
         <div className="detail-item">
            <h3 style={{ textAlign: 'center', marginBottom: '50px' }}>글제목: {result.title}</h3>
            <p>내용: {result.content}</p>
            <p>작성자: {result.writer}</p>
            {/* <div>
               <hr />
               <h3>댓글</h3>
               {
                  ment.map(function (item, i) {
                     return (
                        <div key={i} style={{marginBottom:'20px'}}>
                           {item.content}
                        </div>
                     )
                  })
               }
            </div> */}
            <Comment parent={result._id} writer={result.writer} ment={ment} mentWriter={session.user.userId}/>
         </div>
      </div>
   )
}