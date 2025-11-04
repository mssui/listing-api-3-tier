import { Module } from '@nestjs/common';
import { ListingsController } from './listings.controller';
import { ListingsService } from './listings.service';
import { ListingsRepository } from './listings.repository';
import { Listing } from './listing.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { ListingsResolver } from './listings.resolver';


@Module({
    imports: [SequelizeModule.forFeature([Listing])],
    controllers: [ListingsController],
    providers: [ListingsService, ListingsRepository, ListingsResolver],
    exports: [ListingsRepository],
})
export class ListingsModule {}
