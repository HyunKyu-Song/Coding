import { connectDB } from "@/util/database.js";
import { ObjectId } from "mongodb";

export default async function Update(req, res) {

   const client = await connectDB;
   const db = client.db("forum");
   // console.log(req.body._id)

   await db.collection('post').updateOne({ _id: new ObjectId(req.body._id)}, {$set : {title : req.body.title, content : req.body.content}})

   return res.redirect(302, '/list');
}