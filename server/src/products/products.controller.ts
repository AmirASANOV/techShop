import {
  Controller,
  Body,
  UseGuards,
  Req,
  Get,
  Post,
  Bind,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { TokenGuard } from 'src/auth/token.guard';
import { Request } from 'express';
import { ApiBearerAuth, ApiBody, ApiConsumes } from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { fileStorage } from 'src/files/storage';

@ApiBearerAuth()
@Controller('products')
export class ProductController {
  constructor(private readonly productsService: ProductsService) {}

  @UseGuards(TokenGuard)
  @Get()
  async getAllProducts(@Req() req: Request) {
    return this.productsService.getAllProductsService(req['user']);
  }

  @UseGuards(TokenGuard)
  @Post('create')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: fileStorage,
    }),
  )
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @Bind(UploadedFile())
  create(
    @Body() createProductDto: CreateProductDto,
    @Req() req: Request,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.productsService.createProductService(
      {
        ...createProductDto,
        picture: file.path.replaceAll('uploads/', ''),
      },
      req['user'],
    );
  }
}
