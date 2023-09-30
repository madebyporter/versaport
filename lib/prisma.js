import { PrismaClient } from '@prisma/client';

let prisma;

if (process.client) {
  // Create a Prisma Client instance on the client side (browser)
  prisma = new PrismaClient();
} else {
  // Create a Prisma Client instance on the server side (Node.js)
  prisma = global.prisma || new PrismaClient();

  if (process.env.NODE_ENV === 'development') {
    global.prisma = prisma;
  }
}

export default prisma;
