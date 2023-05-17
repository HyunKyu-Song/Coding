import { connectDB } from "@/util/database.js";
import LoginBtn from "./LoginBtn";
import LogoutBtn from "./LogoutBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Link from "next/link";

export default async function Home() {

  const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection('post').find().toArray();
  // console.log(result);
  let session = await getServerSession(authOptions)
  //console.log(session.user.userId);
  return (
    <div>
      <h2>Home</h2>
      {
        session != null ?
          <div>
            <div>userName: {session.user.userId}</div>
            <LogoutBtn />
          </div> :
          <div>
            <LoginBtn />
            <Link href={'/register'} style={{ textDecoration: 'none', color: 'black'}}>Sign-up</Link>
          </div>
      }
    </div>
  )
}
