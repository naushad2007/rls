import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from '@/auth/auth.module';
import { UsersModule } from '@/users/users.module';

import validationSchema from '../config/environments';
import { DatabaseModule } from '../database/database.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ validationSchema }),
    DatabaseModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
