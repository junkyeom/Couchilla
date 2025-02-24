import NextAuth from "next-auth/next";
import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

let prisma = new PrismaClient()

export const authOptions:NextAuthOptions= {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || 'no',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'no',
    }),
    
    CredentialsProvider({
      //1. 로그인페이지 폼 자동생성해주는 코드 
      name: "credentials",
        credentials: {
          email: { label: "email", type: "text" },
          password: { label: "password", type: "password" },
      },

      //2. 로그인요청시 실행되는코드
      //직접 DB에서 아이디,비번 비교하고 
      //아이디,비번 맞으면 return 결과, 틀리면 return null 해야함
      async authorize(credentials) {

        if (!credentials?.email || !credentials?.password) {
          console.log('이메일과 비밀번호를 입력하세요.')
          throw new Error("이메일과 비밀번호를 입력하세요.");
        }
          
        let user = await prisma.user.findFirst({
            where : {
                email : credentials?.email
            }})
        if (!user) {
          console.log('해당 이메일이 존재하지 않습니다.')
          throw new Error("해당 이메일이 존재하지 않습니다.");
        }
        const pwcheck = await bcrypt.compare(credentials.password, user.password);
        if (!pwcheck) {
          console.log('비밀번호가 올바르지 않습니다.')
          throw new Error("비밀번호가 올바르지 않습니다.");
        }

        return {
            id: user.id.toString(), // BigInt를 string으로 변환
            name: user.name,
            email: user.email,
            password: user.password,
            created_at: user.created_at,
          };
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
        token.user = {
            name: user.name || null,
            email: user.email,
          };
        }
        return token;
    },
    //5. 유저 세션이 조회될 때 마다 실행되는 코드
    session: async ({ session, token }) => {
      if(token.user) {
        session.user = token.user;  
      }
    return session
    },
  },
  pages: {
    signIn: "/login"
 },
  secret: process.env.AUTH_SECRET 
};
export default NextAuth(authOptions)