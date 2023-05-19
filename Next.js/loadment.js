import { connectDB } from "@/util/database.js";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function Loadment(req, res) {

   const client = await connectDB;
   const db = client.db("forum");
   let session = await getServerSession(req, res, authOptions);
   // console.log(session);
   // console.log('session 없나?');
   let result = await db.collection('comment').find({writer: session.user.userEmail}).toArray()
   
   res.status(200).json(result);
}