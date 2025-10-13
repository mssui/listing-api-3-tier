import { Injectable, Inject } from '@nestjs/common';
import { CreateListingDto } from '../dto/create-listing.dto';
import { DeleteListingDto } from '../dto/delete-listing.dto';
import { UpdateListingDto } from '../dto/update-listing.dto';
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

     async update(newList: UpdateListingDto): Promise<any> {
        console.log('Create hits', newList);
        // const newListing: CreateListingDto = new CreateListingDto(...newList);

        // console.log('Create generates', newListing)
        // newListing.onHold = false;

        return this.listingRepository.updateListing(newList);
    }

     async delete(listingId: DeleteListingDto): Promise<any> {
        console.log('Delete hits', listingId);
        // const newListing: CreateListingDto = new CreateListingDto(...newList);

        // console.log('Create generates', newListing)
        // newListing.onHold = false;

        return this.listingRepository.deleteListingById(listingId);
    }
}
