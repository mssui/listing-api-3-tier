import { Injectable } from '@nestjs/common';
import { CreateListingDto } from '../dto/create-listing.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sequelize } from "sequelize-typescript";
import { InjectModel } from '@nestjs/sequelize';
import { Listing } from './listing.model';
import { CreateListing } from '../dto/entity/create-listing.entity';


@Injectable()
export class ListingsRepository {
  constructor(
    private sequelize: Sequelize,

    @InjectModel(Listing)
    private readonly listingModel: typeof Listing,
    //INJECT SEQUELIZE HERE
    //@InjectRepository(CreateListing) private readonly listingRepository: Repository<CreateListing>,
  ) { }
  //private readonly cats: CreateListingDto[] = [];

  async createListing(newList: CreateListingDto): Promise<any> {
    //await CreateListing.create
    console.log("About to save",newList)
    return this.listingModel.create({ newList });
  }

  // findAll(): CreateListingDto[] {
  //   console.log('find all hits', this.cats)
  //   return this.cats;
  // }
}