import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

let prisma = new PrismaClient();

export const authOptions:NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || 'no',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'no',
      
      async profile(profile) {
        const email = profile.email;

        // Prisma로 사용자가 이미 있는지 확인
        const existingUser = await prisma.user.findFirst({
          where: { email: email },
        });

        if (!existingUser) {
          // 구글 계정으로 회원가입 처리 (비밀번호는 필요 없음)
          const newUser = await prisma.user.create({
            data: {
              name: profile.name,
              email: profile.email,
              password: "", // 구글 로그인에서는 비밀번호 없음
            },
          });

          return {
            id: newUser.id.toString(),
            name: newUser.name,
            email: newUser.email,
            image: profile.picture,  // 구글 프로필 사진
          };
        }

        // 기존 사용자 있으면 그 정보 반환
        return {
          id: existingUser.id.toString(),
          name: existingUser.name,
          email: existingUser.email,
          image: profile.picture,  // 구글 프로필 사진
        };
      },
    }),

    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          console.log('이메일과 비밀번호를 입력하세요.');
          throw new Error("이메일과 비밀번호를 입력하세요.");
        }

        const user = await prisma.user.findFirst({
          where: { email: credentials?.email },
        });

        if (!user) {
          console.log('해당 이메일이 존재하지 않습니다.');
          throw new Error("해당 이메일이 존재하지 않습니다.");
        }
        if (!user.password) {
          throw new Error("해당 계정은 비밀번호가 설정되어 있지 않습니다.");
        }
        const pwcheck = await bcrypt.compare(credentials.password, user.password);
        if (!pwcheck) {
          console.log('비밀번호가 올바르지 않습니다.');
          throw new Error("비밀번호가 올바르지 않습니다.");
        }

        return {
          id: user.id.toString(),
          name: user.name,
          email: user.email,
          password: user.password,
          created_at: user.created_at,
        };
      },
    }),
  ],

  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30일
  },

  callbacks: {
    jwt: async ({ token, user }:any) => {
      if (user) {
        token.user = {
          id: user.id,
          name: user.name,
          email: user.email,
        };
      }
      return token;
    },

    session: async ({ session, token }:any) => {
      if (token.user) {
        session.user = token.user;
      }
      return session;
    },
  },

  pages: {
    signIn: "/login",  // 로그인 페이지
  },

  secret: process.env.AUTH_SECRET, // 보안 키
};

export default NextAuth(authOptions);