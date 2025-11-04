import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { CreateListingDto } from '../dto/create-listing.dto';
import { DeleteListingDto } from '../dto/delete-listing.dto';
import { UpdateListingDto } from '../dto/update-listing.dto';
import { Sequelize } from 'sequelize-typescript';
import { InjectModel } from '@nestjs/sequelize';
import { Listing } from '../listings/listing.model';
import { User } from './user.model';

@Injectable()
export class UserRepository {
    constructor(
        private sequelize: Sequelize,
        @InjectModel(User)
        private readonly userModel: typeof User,
    ) { }

    async createUser(userData): Promise<any> {
        console.log('Trying to save', userData);
        const newRecordData = new User(userData);
        try {
            newRecordData.save();
            return newRecordData;
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async findAll(): Promise<any> {
        try {
            const result = this.userModel.findAll();
            console.log('User result', result)
            return result;
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
