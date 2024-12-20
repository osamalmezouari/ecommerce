import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { v4 as uuid } from 'uuid';
import { PRODUCT_NOT_FOUND_Exception } from 'src/common/exceptions/PRODUCT_NOT_FOUND.exception';
@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createProductDto: CreateProductDto) {
    const product = await this.prisma.product.create({
      data: {
        id: uuid(),
        ...createProductDto,
      },
    });
    return product;
  }

  async findAll() {
    const product = await this.prisma.product.findMany();
    return product;
  }

  async findOne(id: string) {
    const product = await this.prisma.product.findUnique({ where: { id } });
    if (product) return product;
    if (!product) throw new PRODUCT_NOT_FOUND_Exception(id);
  }

  async getAllProductCards() {
    const productsWithDiscount = await this.prisma.product.findMany({
      where: {
        discount: {
          gt: 0,
        },
      },
      select: {
        id: true,
        name: true,
        price: true,
        description: true,
        discount: true,
        gallery: {
          select: {
            imageUrl: true,
          },
        },
        category: {
          select: {
            name: true,
          },
        },
        reviews: {
          select: {
            rating: true,
          },
        },
        Units: {
          select: {
            name: true,
          },
        },
      },
    });

    const productsWithAvgRating = productsWithDiscount.map((product) => {
      const totalRating = product.reviews.reduce((total, review) => {
        return total + (review.rating || 0);
      }, 0);
      const avgRating = totalRating / product.reviews.length;
      const cappedAvgRating = Math.min(avgRating, 5);

      return {
        id: product.id,
        name: product.name,
        price: product.price,
        discount: product.discount,
        description: product.description,
        productAvgRating: cappedAvgRating || 0,
        priceWithDiscount: parseFloat(
          (product.price - (product.price * product.discount) / 100).toFixed(2),
        ),
        categoryName: product.category.name,
        unit: product.Units.name,
        imageLink: product.gallery[0].imageUrl,
      };
    });

    return productsWithAvgRating;
  }
  async getnewArrivals() {
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
    const productsWithDiscount = await this.prisma.product.findMany({
      where: {
        created_at: {
          gt: oneMonthAgo,
        },
      },
      select: {
        id: true,
        name: true,
        price: true,
        description: true,
        discount: true,
        gallery: {
          select: {
            imageUrl: true,
          },
        },
        category: {
          select: {
            name: true,
          },
        },
        reviews: {
          select: {
            rating: true,
          },
        },
        Units: {
          select: {
            name: true,
          },
        },
      },
    });

    const productsWithAvgRating = productsWithDiscount.map((product) => {
      const totalRating = product.reviews.reduce((total, review) => {
        return total + (review.rating || 0);
      }, 0);
      const avgRating = totalRating / product.reviews.length;
      const cappedAvgRating = Math.min(avgRating, 5);

      return {
        id: product.id,
        name: product.name,
        price: product.price,
        discount: product.discount,
        description: product.description,
        productAvgRating: cappedAvgRating || 0,
        priceWithDiscount: parseFloat(
          (product.price - (product.price * product.discount) / 100).toFixed(2),
        ),
        categoryName: product.category.name,
        unit: product.Units.name,
        imageLink: product.gallery[0].imageUrl,
      };
    });

    return productsWithAvgRating;
  }

  async getComparedProductDetails(ids: string[]) {
    const validateIds = await this.prisma.product.findMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
  
    if (validateIds.length !== ids.length) {
      throw new Error('Invalid Ids');
    }
  
    const products = await Promise.all(
      validateIds.map(async (product) => {
        const productData = await this.prisma.product.findUnique({
          where: {
            id: product.id,
          },
          select: {
            id: true,
            name: true,
            price: true,
            discount: true,
            description: true,
            stock: true,
            gallery: {
              select: {
                imageUrl: true,
              },
            },
            Units: {
              select: {
                name: true,
              },
            },
            category: {
              select: {
                name: true,
              },
            },
            reviews: {
              select: {
                rating: true,
              },
            },
          },
        });
  
        // Format the product data to match CompareItemProps
        return {
          id: productData.id,
          svgLink: productData.gallery?.[0]?.imageUrl || '', // Use the first gallery image URL or fallback
          productName: productData.name,
          productId: productData.id,
          categoryName: productData.category?.name || 'Uncategorized',
          rating: productData.reviews?.[0]?.rating || 0,
          reviewsCount: productData.reviews?.length || 0,
          price: productData.price,
          weight: productData.Units?.name || 'N/A',
          description: productData.description,
          stock: productData.stock,
        };
      })
    );
  
    return products;
  }
  

  async update(id: string, updateProductDto: UpdateProductDto) {
    await this.findOne(id);
    const product = await this.prisma.product.update({
      where: { id },
      data: updateProductDto,
    });
    return product;
  }

  async remove(id: string) {
    await this.findOne(id);
    const product = await this.prisma.product.delete({ where: { id } });
    return product;
  }
}
