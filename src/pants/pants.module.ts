import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Pants, PantsFactory } from 'src/schema/pants.schema';
import { PantsService } from './pants.service';
import { PantsController } from './pants.controller';

@Module({ imports:[MongooseModule.forFeature([{
    name:Pants.name,
    schema:PantsFactory
}])],
providers:[PantsService],
controllers:[PantsController]})
export class PantsModule {}
