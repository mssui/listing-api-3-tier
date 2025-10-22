import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { CreateListingDto } from '../dto/create-listing.dto';
import { DeleteListingDto } from '../dto/delete-listing.dto';
import { UpdateListingDto } from '../dto/update-listing.dto';
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

    async updateListing(newList): Promise<any> {
        console.log('TO BE UPDATED:', newList);
        const newRecordData = new Listing(newList);
        try {
            newRecordData.save();
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async deleteListingById(listingId): Promise<any> {
        console.log('ID TO DELETE:', listingId);
        // const newRecordData = new Listing(newList);
        // try {
        //     newRecordData.save();
        // } catch (err) {
        //     throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        // }
    }

    async findAll(): Promise<any> {
        try {
            const result = this.listingModel.findAll();
            console.log('result', result)
            return result;
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
