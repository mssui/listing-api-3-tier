import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateListingDto } from '../dto/create-listing.dto';
import { DeleteListingDto } from '../dto/delete-listing.dto';
import { UpdateListingDto } from '../dto/update-listing.dto';
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
    constructor(private listingsService: ListingsService) { }

    // @ApiOperation()
    @Post('create')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async create(@Body() createCatDto: CreateListingDto): Promise<CreateListingDto> {
        console.log('Create Body:',createCatDto)
        return this.listingsService.create(createCatDto);
    }

    @Post('update')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async update(@Body() createCatDto: UpdateListingDto): Promise<any> {
        return this.listingsService.update(createCatDto);
    }

    @Post('delete')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async delete(@Body() listingId: DeleteListingDto): Promise<any> {
        return this.listingsService.delete(listingId);
    }

    @Get()
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async getAll(): Promise<CreateListingDto[]> {
        return this.listingsService.findAll();
    }
}
