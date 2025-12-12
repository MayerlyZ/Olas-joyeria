import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";
import bcrypt from "bcrypt";
import { MongoClient } from "mongodb";

async function getUser(client: MongoClient, email: string) {
  const db = client.db("Ecommerce");
  const usersCollection = db.collection("users");
  const emailNormalized = email.toLowerCase().trim();
  console.log("Buscando usuario con email:", emailNormalized);
  const user = await usersCollection.findOne({ email: emailNormalized });
  console.log("Usuario encontrado:", user ? "Sí" : "No");
  return user;
}

const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        if (!credentials?.email || !credentials?.password) {
          console.error("Credenciales incompletas");
          return null;
        }

        try {
          const client = await clientPromise;
          const emailNormalized = credentials.email.toLowerCase().trim();
          console.log("Intentando autenticar usuario:", emailNormalized);
          
          const user = await getUser(client, emailNormalized);

          if (!user) {
            console.error("Usuario no encontrado:", emailNormalized);
            return null;
          }

          console.log("Usuario encontrado, validando contraseña");

          if (user.password) {
            try {
              // Verificar si la contraseña está hasheada (comienza con $2a$ o $2b$ de bcrypt)
              if (typeof user.password === "string" && user.password.startsWith("$2")) {
                console.log("Contraseña hasheada detectada");
                const isValid = await bcrypt.compare(credentials.password, user.password);
                if (isValid) {
                  console.log("Contraseña válida (hasheada)");
                  return {
                    id: user._id.toString(),
                    name: user.name || user.email,
                    email: user.email,
                    image: user.image,
                    role: user.role || "user",
                  };
                } else {
                  console.error("Contraseña inválida (hasheada)");
                }
              } else {
                // Contraseña sin hashear (antigua)
                console.log("Contraseña sin hashear detectada");
                if (credentials.password === user.password) {
                  console.log("Contraseña válida (sin hashear), hasheando...");
                  const usersCollection = client.db("Ecommerce").collection("users");
                  const newHash = await bcrypt.hash(credentials.password, 10);
                  await usersCollection.updateOne({ _id: user._id }, { $set: { password: newHash } });
                  return {
                    id: user._id.toString(),
                    name: user.name || user.email,
                    email: user.email,
                    image: user.image,
                    role: user.role || "user",
                  };
                } else {
                  console.error("Contraseña inválida (sin hashear)");
                }
              }
            } catch (err) {
              console.error("Error verifying password:", err);
              return null;
            }
          } else {
            console.error("Usuario no tiene contraseña");
            return null;
          }

          return null;
        } catch (error) {
          console.error("Authorization error:", error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt" as const,
  },
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.role = user.role || "user";
      }
      return token;
    },
    async session({ session, token }: any) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }
      return session;
    },
    async redirect({ url, baseUrl, token }: any) {
      // Si el usuario es admin, redirige al dashboard
      if (token?.role === "admin") {
        return `${baseUrl}/admin`;
      }
      // Para otros usuarios, redirige al home
      return `${baseUrl}/`;
    },
  },
  pages: {
    signIn: "/auth",
    error: "/auth",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
