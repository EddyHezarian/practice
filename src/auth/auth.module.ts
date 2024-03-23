import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserFactory, UserSchema } from 'src/schema/user.schema';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './strategy/local.strategy';

@Module({
  imports:[
    PassportModule,
    
    JwtModule.register({
    secret:"EddyHzn6862#",
    signOptions:{expiresIn:'1h'},}),
    MongooseModule.forFeature([{name:UserSchema.name,schema:UserFactory }])],
  controllers: [AuthController],
  providers: [AuthService ,LocalStrategy]
})
export class AuthModule {}
