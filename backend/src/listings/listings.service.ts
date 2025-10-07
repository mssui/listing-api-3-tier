import { Injectable, Inject } from '@nestjs/common';
import { CreateListingDto } from '../dto/create-listing.dto';
//import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ListingsRepository } from './listings.repository';

@Injectable()
export class ListingsService {
  constructor(
    @Inject(ListingsRepository) private readonly listingRepository: Repository<ListingsRepository>,
  ) { }
  //private readonly cats: CreateListingDto[] = [];

  create(newList: CreateListingDto) {
    console.log('Create hits', newList)
    const newListing: CreateListingDto = new CreateListingDto();

    console.log('Create generates', newListing)
    newListing.onHold = false;


   // this.listingRepository.save(newListing as any);
  }

  // findAll(): CreateListingDto[] {
  //   console.log('find all hits', this.cats)
  //   return this.cats;
  // }
}