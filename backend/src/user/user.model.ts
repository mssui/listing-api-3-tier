import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Model, Table, DataType, AllowNull, HasMany } from 'sequelize-typescript';

import {
    DataTypes, CreationOptional, InferAttributes,
    InferCreationAttributes,
} from '@sequelize/core';import { Listing } from '../listings/listing.model';


@ObjectType()
@Table({ paranoid: true, tableName: 'users', modelName: 'user' })
export class User extends Model<User> {
    @Field(() => String)
    @Column(DataType.INTEGER)
    declare username: number;

    @Field(() => String)
    @Column(DataType.STRING)
    declare email: string;

    @Field(() => String)
    @Column(DataType.STRING)
    declare password: string;

    @Field(() => String)
    @Column(DataType.STRING)
    declare role: string;

    @Field(() => [Listing])
    //@HasMany(() => Listing, { foreignKey: "createdBy" })
    @HasMany(() => Listing, { foreignKey: "createdBy" })
    declare listings?: Listing[];
}


