import { Query, Resolver } from '@nestjs/graphql';
import { User } from './user.model';
import { UserService } from './user.service';


@Resolver(() => User)
export class UserResolver {
    constructor(private readonly userService: UserService) { }

    @Query(() => [User], {name : 'user'})
    //Graphql query name is not assigned, so it will use finduser as graphql Query name as well
    async findUser() {
        return await this.userService.findAll();
    }

}

