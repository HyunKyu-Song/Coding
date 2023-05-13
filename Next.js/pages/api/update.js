import { connectDB } from "@/util/database.js";

export default async function Update(req, res) {

   const client = await connectDB;
   const db = client.db("forum");

   req.body.num = parseInt(req.body.num);

   let result = await db.collection('post').findOne({num : req.body.num})

   await db.collection('post').updateOne({ num: result.num}, {$set : req.body})

   return res.redirect(302, '/list');
}