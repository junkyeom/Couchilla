import { SupabaseAdapter } from "@auth/supabase-adapter";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || 'no',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'no',
    }),
  ],
  secret: process.env.AUTH_SECRET,
};

export default NextAuth(authOptions)