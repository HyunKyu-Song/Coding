import { connectDB } from "@/util/database.js";
import { ObjectId } from "mongodb";

export default async function Detail(props) {

   const client = await connectDB;
   const db = client.db("forum");
   let result = await db.collection('post').findOne({ _id: new ObjectId(`${props.params.id}`) });
   console.log(props)

   return (
      <div className="detail-container">
         <h2 className="detail-title">상세정보</h2>
         <div className="detail-item">
            <h3 style={{
               textAlign: 'center', marginBottom
                  : '50px'
            }}>글제목: {result.title}</h3>
            <p>내용: {result.content}</p>
            <p>작성자: {result.content}</p>
            <p>작성날짜: {result.content}</p>
         </div>
      </div>
   )
}