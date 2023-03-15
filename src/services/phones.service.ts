import { type Phone, PrismaClient, type Product } from '@prisma/client';

const prisma = new PrismaClient();

export const getAll = async(): Promise<Product[]> => (
  await prisma.product.findMany({
    where: { category: 'phones' }
  })
);

export const getWithPagination = (
  page: number,
  perPage: number
): Promise<Product[]> => {
  const skip = ((page - 1) * perPage);
  const take = perPage;

  return prisma.product.findMany({
    skip,
    take,
    where: { category: 'phones' }
  });
};

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
