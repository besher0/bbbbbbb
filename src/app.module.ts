/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { MenuModule } from './menu/menu.module';
import { AuthModule } from './auth/auth.module';
import { TypeModule } from './types/type.module';
import  { dataSourceOptions } from 'db/data-source';

@Module({
  imports: [
    // تحميل إعدادات البيئة من .env
    ConfigModule.forRoot({ isGlobal: true }),

    // إعدادات قاعدة البيانات PostgreSQL
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    TypeOrmModule.forRoot(dataSourceOptions),
    AuthModule,
    UsersModule,
    MenuModule,
    TypeModule
  ],
})
export class AppModule {}
