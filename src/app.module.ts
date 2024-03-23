import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { BrandModule } from './brand/brand.module';
import { ShirtService } from './shirt/shirt.service';
import { ShirtController } from './shirt/shirt.controller';
import { ShirtModule } from './shirt/shirt.module';
import { ScarfModule } from './scarf/scarf.module';
import { PantsService } from './pants/pants.service';
import { PantsController } from './pants/pants.controller';
import { PantsModule } from './pants/pants.module';
import { OrderModule } from './order/order.module';



@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/pipline'), AuthModule, BrandModule, ShirtModule, ScarfModule, PantsModule, OrderModule,],
  controllers: [ ],
  providers: [ ],
})
export class AppModule {}
