import { connectDB } from "@/util/database.js";
import { ObjectId } from "mongodb";

export default async function Delete(req, res) {

   const client = await connectDB;
   const db = client.db("forum");
   //console.log(req.body);

   let result = await db.collection('post').deleteOne({_id : new ObjectId(req.body)})
   console.log(result);


   //GET 요청으로 삭제기능 구현
   // console.log(req.query._id);
   // let result = await db.collection('post').deleteOne({_id : new ObjectId(req.query._id)})


   res.redirect(302, '/write');
}