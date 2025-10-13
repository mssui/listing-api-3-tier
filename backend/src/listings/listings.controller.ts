import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateListingDto } from '../dto/create-listing.dto';
import { ListingsService } from './listings.service';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Listings')
@Controller('listings')
export class ListingsController {
    constructor(private listingsService: ListingsService) {}

    @Post()
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async create(@Body() createCatDto: CreateListingDto): Promise<any> {
        return this.listingsService.create(createCatDto);
    }

    // @Get()
    // async findAll(): Promise<CreateListingDto[]> {
    //   return this.listingsService.findAll();
    // }
}
