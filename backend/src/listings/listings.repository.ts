import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { CreateListingDto } from '../dto/create-listing.dto';
import { Sequelize } from 'sequelize-typescript';
import { InjectModel } from '@nestjs/sequelize';
import { Listing } from './listing.model';

@Injectable()
export class ListingsRepository {
    constructor(
        private sequelize: Sequelize,
        @InjectModel(Listing)
        private readonly listingModel: typeof Listing,
    ) { }

    async createListing(newList): Promise<any> {
        console.log('Trying to save', newList);
        const newRecordData = new Listing(newList);
        try {
            newRecordData.save();
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // findAll(): CreateListingDto[] {
    //   console.log('find all hits', this.cats)
    //   return this.cats;
    // }
}
