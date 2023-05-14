import { connectDB } from "@/util/database.js";

export default async function Add(req, res) {

   const client = await connectDB;
   const db = client.db("forum");
   // const now = new Date();

   
   if (req.method == 'POST' && req.body.title != '') {
      
      await db.collection('counter').updateOne({name: '게시물갯수'}, {$inc: {cnt:1}})
      let result = await db.collection('counter').findOne({name : '게시물갯수'});

      await db.collection('post').insertOne({num:result.cnt, title: req.body.title, content: req.body.content, writer: req.body.writer })

      return res.redirect(302, '/list');
   }

   return res.redirect(302, '/write');
}