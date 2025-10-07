import { Injectable } from '@nestjs/common';
import { CreateListingDto } from '../dto/create-listing.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateListing } from '../dto/entity/create-listing.entity';

@Injectable()
export class ListingsRepository {
  constructor(
    //INJECT SEQUELIZE HERE
    //@InjectRepository(CreateListing) private readonly listingRepository: Repository<CreateListing>,
  ) { }
  //private readonly cats: CreateListingDto[] = [];

  createListing(newList: CreateListingDto) {
    //connect sequelize to save the new data
  }

  // findAll(): CreateListingDto[] {
  //   console.log('find all hits', this.cats)
  //   return this.cats;
  // }
}