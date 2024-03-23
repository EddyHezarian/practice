import { Module } from '@nestjs/common';
import { BrandController } from './brand.controller';
import { BrandService } from './brand.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Brand, BrandSchema } from 'src/schema/brand.schema';

@Module({
  imports:[MongooseModule.forFeature([{
    name:Brand.name,
    schema:BrandSchema
  }])],
  controllers: [BrandController],
  providers: [BrandService]
})
export class BrandModule {}
