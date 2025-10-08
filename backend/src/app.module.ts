import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { Listing } from './listings/listing.model';
import { ListingsModule } from './listings/listings.module.js';
import { ListingsRepository } from './listings/listings.repository.js';
import { ListingsService } from './listings/listings.service.js';


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
    SequelizeModule.forFeature([Listing]),
  ],
  providers: [ListingsRepository, ListingsService],
  exports: [ListingsRepository],
})

export class AppModule {}
