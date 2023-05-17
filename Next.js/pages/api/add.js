import { connectDB } from "@/util/database.js";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function Add(req, res) {

   const client = await connectDB;
   const db = client.db("forum");
   let session = await getServerSession(req, res, authOptions);
   // const now = new Date();
   //console.log(session.user.name);

   
   if (req.method == 'POST' && req.body.title != '' && session != null) {
      
      await db.collection('counter').updateOne({name: '게시물갯수'}, {$inc: {cnt:1}})
      let result = await db.collection('counter').findOne({name : '게시물갯수'});

      await db.collection('post').insertOne({num:result.cnt, title: req.body.title, content: req.body.content, writer: session.user.userEmail })

      return res.redirect(302, '/list');
   }

   else if(req.method == 'POST' && req.body.title != '' && session == null) {
      
      await db.collection('counter').updateOne({name: '게시물갯수'}, {$inc: {cnt:1}})
      let result = await db.collection('counter').findOne({name : '게시물갯수'});

      await db.collection('post').insertOne({num:result.cnt, title: req.body.title, content: req.body.content, writer: '비회원' })

      return res.redirect(302, '/list');
   }

   return res.redirect(302, '/write');
}