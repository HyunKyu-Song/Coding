import { connectDB } from "@/util/database.js";
import bcrypt from 'bcrypt';

export default async function SignUp(req, res) {

   const client = await connectDB;
   const db = client.db("forum");
   // let session = await getServerSession(req, res, authOptions);
   //console.log(session.user.name);

   let hash = await bcrypt.hash(req.body.userPw, 10);

   let find = await db.collection('register').findOne({ user_id: req.body.userId })

   if(!find){
      await db.collection('register').insertOne({ user_id: req.body.userId, user_pw: hash, user_email: req.body.userEmail })
      return res.redirect(302, '/');
   }
   return res.redirect(302, '/register');
}