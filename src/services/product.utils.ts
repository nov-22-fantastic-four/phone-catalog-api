import { type ParsedQs } from 'qs';
import { type Prisma } from '@prisma/client';

export const prepareArgsWithQuery = (
  query: ParsedQs
): Prisma.ProductFindManyArgs => {
  const args: Prisma.ProductFindManyArgs = {};
  const {
    productType,
    search,
    sort,
    page = 1,
    perPage
  } = query;

  if (sort) {
    const ordering = sort === 'year'
      ? 'desc'
      : 'asc';

    args.orderBy = { [String(sort)]: ordering };
  }

  if (productType) {
    args.where = { category: String(productType) };
  }

  if (search) {
    args.where = args.where || {};

    args.where.name = {
      contains: String(search),
      mode: 'insensitive'
    };
  }

  if (perPage) {
    const skip = (Number(page) - 1) * Number(perPage);
    const take = Number(perPage);

    args.skip = skip;
    args.take = take;
  }

  return args;
};

export const getRandomIds = (excludedId: number): number[] => {
  const ids = Array(100)
    .fill(0)
    .map((n, i) => ({ random: Math.random(), num: i }));

  ids.sort((a, b) => a.random - b.random);

  return ids
    .slice(0, 25)
    .map(({ num }) => num)
    .filter(id => id !== excludedId);
};
