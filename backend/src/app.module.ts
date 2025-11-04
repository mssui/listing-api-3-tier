import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Listing } from './listings/listing.model';
import { User } from './user/user.model';
import { ListingsModule } from './listings/listings.module.js';
import { ListingsRepository } from './listings/listings.repository.js';
import { ListingsService } from './listings/listings.service.js';
import { UserModule } from './user/user.module';
import { UserRepository } from './user/user.repository.js';
import { UserService } from './user/user.service.js';

@Module({
    imports: [
        SequelizeModule.forRootAsync({
            useFactory: () => ({
                dialect: 'postgres',
                host: 'localhost',
                //host: process.env.DATABASE_HOST,
                port: 5432,
                username: 'postgres',
                password: 'yourpassword',
                database: 'task_db',
                models: [Listing, User],
                autoLoadModels: true,   // Sequelize creates table if not exists
                synchronize: false,     // We will use migrations
                logging: true,
            }),
        }),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: true,
            debug: true,
            playground: true

        }),
        SequelizeModule.forFeature([Listing, User]),
        UserModule,
        ListingsModule,
    ],
    providers: [ListingsRepository, ListingsService, UserRepository, UserService],
    exports: [ListingsRepository, UserRepository],
})

export class AppModule { }
