import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";   // 새로 추가
import bcrypt from 'bcrypt';  // 새로 추가

export const authOptions = {
   providers: [
      GithubProvider({
         clientId: '76b42529097c4f6f1ae9',
         clientSecret: '1a52297767e9f3faee77a6b803155ba9f4f3f4eb',
      }),

      CredentialsProvider({
         //1. 로그인페이지 폼 자동생성해주는 코드 
         name: "credentials",
         credentials: {
            // 로그인페이지에 들어갈 input들
            // userId: { label: "아이디", type: "text" },
            userEmail: { label: "이메일", type: "text" },
            userPw: { label: "비번", type: "text" },
         },

         //2. 로그인요청시 실행되는코드
         //직접 DB에서 아이디,비번 비교하고 
         //아이디,비번 맞으면 return 결과, 틀리면 return null 해야함
         async authorize(credentials) {
            let db = (await connectDB).db('forum');
            let user = await db.collection('register').findOne({ user_email: credentials.userEmail })
            if (!user) {
               console.log('해당 이메일이 없음');
               return null
            }
            const pwcheck = await bcrypt.compare(credentials.userPw, user.user_pw);
            console.log(credentials.userPw)
            console.log(user.user_pw)
            if (!pwcheck) {
               console.log('비번틀림');
               return null
            }
            return user
         }
      })
   ],

   //3. jwt 써놔야 잘됩니다 + jwt 만료일설정
   session: {
      strategy: 'jwt',
      maxAge: 30 * 24 * 60 * 60 //30일
   },

   callbacks: {
      //4. jwt 만들 때 실행되는 코드 
      //user변수는 DB의 유저정보담겨있고 token.user에 뭐 저장하면 jwt에 들어갑니다.
      jwt: async ({ token, user }) => {
         if (user) {
            token.user = {};
            token.user.userId = user.user_id
            token.user.userEmail = user.user_email
         }
         return token;
      },
      //5. 유저 세션이 조회될 때 마다 실행되는 코드
      session: async ({ session, token }) => {
         session.user = token.user;
         return session;
      },
   },

   secret: 'song033634120',
   adapter: MongoDBAdapter(connectDB)
};
export default NextAuth(authOptions); 