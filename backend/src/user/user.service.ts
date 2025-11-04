import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
     constructor(private readonly userRepository: UserRepository) { }

      async findAll(): Promise<any> {

        // const newListing: CreateListingDto = new CreateListingDto(...newList);

        // console.log('Create generates', newListing)
        // newListing.onHold = false;

        return this.userRepository.findAll();
    }
}
