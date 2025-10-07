import { Module } from '@nestjs/common';
import { ListingsController } from './listings.controller';
import { ListingsService } from './listings.service';
import { ListingsRepository } from './listings.repository';
//import { TypeOrmModule } from '@nestjs/typeorm';

import { CreateListing } from '../dto/entity/create-listing.entity';

@Module({
  // imports: [TypeOrmModule.forFeature([CreateListing])],
  controllers: [ListingsController],
  providers: [ListingsService, ListingsRepository ],
})
export class ListingsModule { }
