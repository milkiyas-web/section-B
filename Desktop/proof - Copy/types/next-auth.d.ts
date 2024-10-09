import NextAuth, { DefaultSession, DefaultUser } from 'next-auth';

interface CustomUser extends DefaultUser {
  id?: string;
}

declare module 'next-auth' {
  interface Session {
    user?: CustomUser;
  }
  interface User extends CustomUser {}
}
