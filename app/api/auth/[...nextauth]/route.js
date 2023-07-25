import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "../lib/mongodb";
import axios from "axios";
import { connectDb } from "../../../../lib/mongo/index";
import { Register } from "../../../../lib/mongo/models/Register";

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  events: {
    createUser: async ({ user }) => {
      await connectDb();
      const newUser = await Register.create({
        _id: user.email,
        email: user.email,
        profilePicture: user.image,
      });
      console.log(newUser);
    },
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
