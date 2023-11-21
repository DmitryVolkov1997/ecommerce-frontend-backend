import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ReviewService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.review.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findById(id: number) {
    const review = await this.prisma.review.findUnique({ where: { id } });

    if (!review) throw new NotFoundException('review not found');

    return review;
  }

  async getAverageValueByProductId(productId: number) {
    return await this.prisma.review
      .aggregate({
        where: { productId },
        _avg: {
          rating: true,
        },
      })
      .then((data) => data._avg);
  }
}
