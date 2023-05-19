import { connectDB } from "@/util/database.js";

export default async function Ment(req, res) {

   const client = await connectDB;
   const db = client.db("forum");

   req.body = JSON.parse(req.body);

   if(req.method == 'POST'){
      await db.collection('comment').insertOne({parent: req.body.parent, content : req.body.comment, writer: req.body.writer, mentWriter: req.body.mentWriter});

      let result = await db.collection('comment').find({parent: req.body.parent}).toArray()
      // console.log('ment.js에서 보낸 거')
      // console.log(result);
      res.status(200).json(result);
   }
   return res.redirect(302, '/list');
}