// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { MongoClient } from "mongodb";
import bcrypt from "bcrypt";

async function getUser(client: MongoClient, email: string) {
  const db = client.db();
  const usersCollection = db.collection("users");
  const user = await usersCollection.findOne({ email });
  return user;
}

const handler = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        const client = await clientPromise;
        const user = await getUser(client, credentials.email);

        if (user && user.password && (await bcrypt.compare(credentials.password, user.password))) {
          return {
            id: user._id.toHexString(),
            name: user.name,
            email: user.email,
            image: user.image,
          };
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt" as const,
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
