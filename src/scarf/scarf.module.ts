import { Module } from '@nestjs/common';
import { ScarfController } from './scarf.controller';
import { ScarfService } from './scarf.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Scarf, ScarfFactory } from 'src/schema/scarf.schema';

@Module({

  imports:[MongooseModule.forFeature([{
    name:Scarf.name,
    schema:ScarfFactory
}])],
providers:[ScarfService],
controllers:[ScarfController]
})
export class ScarfModule {}
