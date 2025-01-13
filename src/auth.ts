import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";



const prisma = new PrismaClient();

export const authOptions : NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        // Find user in database
        const user = await prisma.users.findUnique({
          where: { email },
        });

        if (!user) {
          throw new Error("No user found with this email");
        }

        
        if (password === user.password) {
          return user;
        }

        throw new Error("Invalid email or password");
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.JWT_SECRET || "default_secret_key",
  },
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin", 
  },
};

export default NextAuth(authOptions);
