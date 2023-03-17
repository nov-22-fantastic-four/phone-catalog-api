import { type Phone, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getById = async(id: string): Promise<Phone | null> => (
  await prisma.phone.findUnique({
    where: { id },
    include: {
      description: {
        select: {
          title: true,
          text: true
        }
      }
    }
  })
);
