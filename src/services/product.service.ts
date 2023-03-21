import { PrismaClient, type Product } from '@prisma/client';
import { type ParsedQs } from 'qs';
import { getRandomIds, prepareArgsWithQuery } from './product.utils';

const prisma = new PrismaClient();

export const getAll = async(query: ParsedQs): Promise<Product[]> => {
  const args = prepareArgsWithQuery(query);

  return prisma.product.findMany(args);
};

export const getCount = async(): Promise<number> => (
  await prisma.product.count({
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

export const getDiscounted = async(): Promise<Product[]> => (
  await prisma.$queryRaw`
    SELECT *,
      ("fullPrice" - "price") AS discount
    FROM "Product"
    ORDER BY discount DESC
    LIMIT 16;
`);

export const getRecommended = async(id: number): Promise<Product[]> => {
  const ids = getRandomIds(id);

  return prisma.product.findMany({
    where: {
      id: {
        in: ids
      }
    },
    take: 16
  });
};
