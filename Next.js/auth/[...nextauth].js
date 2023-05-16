import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
   providers: [
      GithubProvider({
         clientId: '76b42529097c4f6f1ae9',
         clientSecret: '1a52297767e9f3faee77a6b803155ba9f4f3f4eb',
      }),
   ],
   secret: 'song033634120',
   adapter : MongoDBAdapter(connectDB)
};
export default NextAuth(authOptions); 