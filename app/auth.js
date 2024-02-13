import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./authconfig";
import { connectToDB } from "./lib/utils";
import { User } from "./lib/models";
import bcrypt from "bcrypt";

const login = async (credentials) => {
  try {
    connectToDB(); 
    const user = await User.findOne({ email: credentials.email });
    // if (!user || !user.isAdmin) throw new Error("Wrong credentials!");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );
    // const isPasswordCorrect = credentials.password === user.password;


    if (!isPasswordCorrect) throw new Error("Wrong credentials!");

    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to login!");
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  // ADD ADDITIONAL INFORMATION TO SESSION
  callbacks: {
    async jwt({ token, user }) {
      console.log('jwtttt', token, user)
      if (user) {
        token.name = user.username;
        token.email = user.email;
        token.role = user.isAdmin;
        // token.img = user.img;
      }
      return token;
    },
    async session({ session, token }) {
      console.log('session', session, token)

      if (token) {
        session.user.username = token.name;
        session.user.email = token.email;
        session.user.role = token.role;
        // session.user.img = token.img;
      }
      return session;
    },
  },
});
