import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { AUTH } from 'src/common/decorators/meta/authentication.decorator';
import { AuthenticationType } from 'src/common/enums/authentication';
import { ParseIdsPipe } from 'src/common/pipes/ParseIdsPipe.pipe';
import { StoreFiltersDto } from 'src/common/dto/storeFilters.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @AUTH(AuthenticationType.None)
  @Get()
  async findAll() {
    const product = await this.productService.findAll();
    return product;
  }

  @AUTH(AuthenticationType.None)
  @Get('store')
  async getStoreProducts(
    @Query('page') page: number,
    @Query('category') category: string,
    @Query('search') search: string,
    @Query('weight') weight: string,
    @Query('Minprice') Minprice: number,
    @Query('Maxprice') Maxprice: number,
    @Query('sort') sort: string,
  ) {
    console.log('Page:', page);
    console.log('Category:', category);
    console.log('Search:', search);
    console.log('Weight:', weight);
    console.log('Minprice:', Minprice);
    console.log('Maxprice:', Maxprice);
    console.log('Sort:', sort);
    return this.productService.getStoreProducts({
      page,
      category,
      search,
      weight,
      Minprice,
      Maxprice,
      sort,
    });
  }

  @AUTH(AuthenticationType.None)
  @Get('cards')
  async getAllProductCards() {
    return this.productService.getAllProductCards();
  }

  @AUTH(AuthenticationType.None)
  @Get('newArrivals')
  async getnewArrivals() {
    return this.productService.getnewArrivals();
  }

  @Get('ComparedProductDetails/:ids')
  async getComparedProductDetails(@Param('ids', ParseIdsPipe) ids: string[]) {
    console.log('ids', ids);
    const product = await this.productService.getComparedProductDetails(ids);
    console.log('Product Details:', product); // Log the data returned from the service
    return product;
  }

  @Get('productdetails/:id')
  async getProductDetails(@Param('id') id: string) {
    const product = await this.productService.getProductDetails(id);
    return product;
  }

  @Get(':productId')
  async findOne(@Param('productId') productId: string) {
    const product = await this.productService.findOne(productId);
    return product;
  }

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    const product = await this.productService.create(createProductDto);
    return product;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    const product = await this.productService.update(id, updateProductDto);
    return product;
  }
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const product = await this.productService.remove(id);
    return product;
  }
}
