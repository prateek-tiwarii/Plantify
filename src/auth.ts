
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectToDB } from './utils/connectToDB';
import Candidate from "@/models/candidateModel";
import Interviewer from '@/models/interviewerModel';

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        console.log("Authorize called with:", credentials);

        const { email, password } = credentials;

        if (!email || !password) {
          throw new Error('Please enter both email and password');
        }

        await connectToDB();

        // Check Candidate
        const candidate = await Candidate.findOne({ email });
        if (candidate && candidate.password === password) {
          return {
            id: candidate._id.toString(),
            email: candidate.email,
            name: candidate.name,
            role: 'candidate',
          };
        }

        // Check Interviewer
        const interviewer = await Interviewer.findOne({ email });
        if (interviewer && interviewer.password === password) {
          return {
            id: interviewer._id.toString(),
            email: interviewer.email,
            name: interviewer.name,
            role: 'interviewer',
          };
        }

        throw new Error('Invalid email or password');
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          id: user.id,
          name: user.name,
          email: user.email,
        };
      }
      return token;
    },
    session({ session, token }) {
      if (token) {
        session.user = {
          id: token.id,
          name: token.name,
          email: token.email,
        };
      }
      console.log("Session created:", session);
      return session;
    },
  },

  secret: 'helloHello',
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV === "development",

  pages: {
    signIn: '/auth/signin',
  },
});