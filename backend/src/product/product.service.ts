import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ReviewService } from 'src/review/review.service';
import { SortType } from './sort.type';

@Injectable()
export class ProductService {
  constructor(
    private prisma: PrismaService,
    private reviewService: ReviewService,
  ) {}

  async bySearchTerm(searchTerm?: string) {
    return this.prisma.product.findMany(
      searchTerm
        ? {
            where: {
              OR: [
                {
                  name: {
                    mode: 'insensitive',
                    contains: searchTerm,
                  },
                },
                {
                  description: {
                    mode: 'insensitive',
                    contains: searchTerm,
                  },
                },
              ],
            },
          }
        : undefined,
    );
  }

  async findAll(type?: SortType) {
    const isByPrice = type === 'high-to-low' || type === 'low-to-hight';
    const isAsc = type === 'oldest' || type === 'low-to-hight';

    return await this.prisma.product.findMany({
      orderBy: {
        [isByPrice ? 'price' : 'createdAt']: isAsc ? 'asc' : 'desc',
      },
    });
  }

  async findById(id: number) {
    const product = await this.prisma.product.findUnique({
      where: { id },
      include: {
        reviews: true,
      },
    });

    if (!product) throw new NotFoundException('product not found');

    return product;
  }

  async findBySlug(slug: string) {
    const product = await this.prisma.product.findUnique({
      where: { slug },
      include: {
        reviews: true,
      },
    });

    if (!product) throw new NotFoundException('product not found');

    return product;
  }

  async findRelatives(currentProductId: number) {
    return this.prisma.product.findMany({
      where: {
        id: {
          not: currentProductId,
        },
      },
    });
  }
}
