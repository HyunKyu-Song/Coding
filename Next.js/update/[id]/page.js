import { connectDB } from "@/util/database.js";
import { ObjectId } from "mongodb";

export default async function Update(props) {

   const client = await connectDB;
   const db = client.db("forum");
   let result = await db.collection('post').findOne({ _id: new ObjectId(`${props.params.id}`) });
   //console.log(props)

   return (
      <div className="detail-container">
         <h2 className="detail-title">글 수정</h2>
         <fieldset>
            <legend>Update</legend>
            <form action="/api/update" method="POST">
               <div >
                  <label>글 번호</label>
                  <p>
                     <input name="num" disabled defaultValue={result.num}></input><hr />
                  </p>
               </div>
               <div style={{display:'none'}}>
                  <label>_id</label>
                  <p>
                     <input name="_id" defaultValue={result._id}></input><hr />
                  </p>
               </div>
               <div>
                  <label>글 제목</label>
                  <p>
                     <input name="title" defaultValue={result.title}></input><hr />
                  </p>
               </div>
               <div>
                  <label>내용</label>
                  <p>
                     <textarea name="content" cols={40} rows={5} defaultValue={result.content}></textarea><hr />
                  </p>
               </div>
               <div>
                  <label>작성자</label>
                  <p>
                     <input name="writer" disabled defaultValue={result.writer}></input><hr />
                  </p>
               </div>
               {/* <div>
                  <label>작성날짜</label>
                  <p>
                     <input placeholder={result.time}></input><hr />
                  </p>
               </div> */}
               <div style={{ textAlign: 'center' }}>
                  <button type="submit">✍ 수정</button>
               </div>
            </form>
         </fieldset>
      </div>
   )
}
