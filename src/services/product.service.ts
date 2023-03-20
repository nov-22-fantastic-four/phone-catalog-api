import { PrismaClient, type Product } from '@prisma/client';

const prisma = new PrismaClient();

export const getCount = async(): Promise<number> => (
  await prisma.product.count({
    where: { category: 'phones' }
  })
);

export const getAll = async(): Promise<Product[]> => (
  await prisma.product.findMany({
    where: { category: 'phones' }
  })
);

export const getById = async(id: number): Promise<Product | null> => (
  await prisma.product.findUnique({
    where: { id }
  })
);

export const getNew = async(): Promise<Product[]> => (
  await prisma.product.findMany({
    where: { category: 'phones' },
    orderBy: [
      {
        year: 'desc'
      },
      {
        price: 'desc'
      }
    ],
    take: 16
  })
);

export const getWithPagination = (
  page: number,
  perPage: number
): Promise<Product[]> => {
  const skip = (page - 1) * perPage;
  const take = perPage;

  return prisma.product.findMany({
    skip,
    take,
    where: { category: 'phones' }
  });
};
