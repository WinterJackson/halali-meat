import { DefaultSession, DefaultUser } from "next-auth";

/**
 * Module Augmentation for NextAuth.
 * 
 * We extend the default `Session` and `User` types to include custom properties
 * that we persist in the JWT:
 * - `id`: The User ID (MongoDB Object ID)
 * - `role`: The User Role (ADMIN, etc.) from our Prisma Schema
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      role: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    role: string;
  }
}
