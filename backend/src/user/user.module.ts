import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { User } from './user.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserResolver } from './user.resolver';


@Module({
    imports: [SequelizeModule.forFeature([User])],
    controllers: [UserController],
    providers: [UserService, UserRepository, UserResolver],
    exports: [UserRepository],
})
export class UserModule {}

