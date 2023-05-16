import { connectDB } from "@/util/database.js";
import LoginBtn from "./LoginBtn";
import LogoutBtn from "./LogoutBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function Home() {

  const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection('post').find().toArray();
  // console.log(result);
  let session = await getServerSession(authOptions)
  // console.log(session.user.name);
  return (
    <div>
      <h2>Home</h2>
      {
        session != null ? <div><div>userName: {session.user.name}</div><LogoutBtn/></div> : <LoginBtn/>
      }
    </div>
  )
}
