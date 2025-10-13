import { Injectable, Inject } from '@nestjs/common';
import { CreateListingDto } from '../dto/create-listing.dto';
import { Sequelize } from 'sequelize-typescript';

import { ListingsRepository } from './listings.repository';

@Injectable()
export class ListingsService {
    constructor(private readonly listingRepository: ListingsRepository) {}

    async create(newList: CreateListingDto): Promise<any> {
        console.log('Create hits', newList);
        // const newListing: CreateListingDto = new CreateListingDto(...newList);

        // console.log('Create generates', newListing)
        // newListing.onHold = false;

        return this.listingRepository.createListing(newList);
    }

    // findAll(): CreateListingDto[] {
    //   console.log('find all hits', this.cats)
    //   return this.cats;
    // }
}
