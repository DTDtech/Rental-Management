import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { checkEmail, checkPassword } from "@/app/actions/auth";

export const Options = {
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            async authorize({ email, password }) {
                const result = await checkEmail(email);

                if (!result) {
                    throw new Error("No account was not found with the given credentials.");
                }

                const checkPasswordResult = await checkPassword(password, result.hashed_password);

                if (!checkPasswordResult) {
                    return null;
                }

                const user = { id: result._id, username: result.username, email: result.email }
                return user;

            },
        }),
    ],
    callbacks: {
        jwt({ token, user }) {
            if (user?.id) {
                token.id = user.id;
                token.name = user.name;
            }
            return token;
        },
        session({ session, token }) {
            if (session.user) {
                session.user.id = token.id;
            }
            return session;
        }
    }
};

const handler = NextAuth(Options);
export { handler as GET, handler as POST };