import { connectDB } from "@/util/database.js";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function Delete(req, res) {

   const client = await connectDB;
   const db = client.db("forum");
   let session = await getServerSession(req, res, authOptions);
   // console.log(req.body);
   // console.log(session.user.email)

   if(session){
      if(session.user.email == req.body){
         let result = await db.collection('post').deleteOne({writer : req.body})
         console.log(result);
         return res.status(200).json('삭제완료')
      }
   }
   return res.status(500).json('현재유저와 작성자 불일치');
   //let result = await db.collection('post').deleteOne({_id : new ObjectId(req.body)})
   // console.log(result);

   //GET 요청으로 삭제기능 구현
   // console.log(req.query._id);
   // let result = await db.collection('post').deleteOne({_id : new ObjectId(req.query._id)})


}