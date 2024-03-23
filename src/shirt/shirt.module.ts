import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Shirt, ShirtFactory } from 'src/schema/shirt.schema';
import { ShirtService } from './shirt.service';
import { ShirtController } from './shirt.controller';

@Module({
    imports:[MongooseModule.forFeature([{
        name:Shirt.name,
        schema:ShirtFactory
    }])],
    providers:[ShirtService],
    controllers:[ShirtController]})
export class ShirtModule {}
