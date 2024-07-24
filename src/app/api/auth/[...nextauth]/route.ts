import { prisma } from "@/lib/prisma";
import { LoginSchema } from "@/types/Login";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { compare } from "bcrypt";
import NextAuth, { Session, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import { JWT } from "next-auth/jwt";
import Credentials from "next-auth/providers/credentials";

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        email: {
          label: "email",
          type: "email",
        },
        password: {
          label: "password",
          type: "password",
        },
      },
      authorize: async (credentials) => {
        const { email, password } = LoginSchema.parse(credentials);
        const user = await prisma.user.findUnique({
          where: {
            email: email,
          },
        });
        if (!user) return null;

        const hash = await compare(password, user.password);
        if (!hash) return null;

        return {
          email: user.email,
          id: user.id,
        };
      },
    }),
  ],
  pages: {
    signIn: '/'
  },
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    session: ({session, token}: {session: Session, token: JWT}) => {
        const u = token as unknown as any
        const userObject: AdapterUser = {
            name: token.name,
            email: token.email ? token.email : "",
            emailVerified: null,
            id: u.id
        }
        session.user = userObject;
        return session;
    },
    jwt: ({token, user}: {token: JWT, user: User}) => {
        if(user) {
            token.id = user.id as string as unknown;
            token.name = user.name;
            token.email = user.email;
          }
        return token;
    }
  }
});
export { handler as GET, handler as POST };
