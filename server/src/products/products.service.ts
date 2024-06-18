import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productsRepository: Repository<Product>,
  ) {}

  async createProductService(createProductDto: CreateProductDto, user) {
    const newProduct = await this.productsRepository.save({
      ...createProductDto,
      user: {
        id: user.userId,
      },
    });
    return newProduct;
  }

  async getAllProductsService(user) {
    const products = await this.productsRepository.find({
      where: { user: { id: user.userId } },
    });
    return products;
  }
}
