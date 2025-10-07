import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { Listing } from '../listings/listing.model.js';
import { ListingsModule } from './listings/listings.module.js';


@Module({
  imports: [
    SequelizeModule.forRootAsync({
      useFactory: () => ({
      dialect: 'postgres',
      host: process.env.DATABASE_HOST,
      port: 5432,
      username: process.env.DATABASE_USER,
      password: 'yourpassword',
      database: 'task_db',
      models: [Listing],
      autoLoadModels: false,   // Sequelize creates table if not exists
      synchronize: false,     // We will use migrations
      logging: true,
       }),
    }),
    ListingsModule,
  ],
})

export class AppModule {}
