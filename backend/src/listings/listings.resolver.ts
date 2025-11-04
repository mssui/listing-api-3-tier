import { Query, Resolver } from '@nestjs/graphql';
import { Listing } from './listing.model';
import { ListingsService } from './listings.service';

@Resolver(() => Listing)
export class ListingsResolver {
    constructor(private readonly listingsService: ListingsService) { }

    @Query(() => [Listing], {name : 'listings'})
    //Graphql query name is not assigned, so it will use finduser as graphql Query name as well
    async findListing() {
        return await this.listingsService.findAll();
    }

}
