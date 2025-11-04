import {
    Column, Model, Table, DataType, BelongsTo, AllowNull,
    CreatedAt,
    HasMany,
    IsEmail,
    Unique,
    UpdatedAt,
    ForeignKey
} from 'sequelize-typescript';
import {
    DataTypes, CreationOptional, InferAttributes,
    InferCreationAttributes,
} from '@sequelize/core';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { UUID } from 'sequelize';



@ObjectType()
@Table({ paranoid: true, tableName: 'listings', modelName: 'listing' })
export class Listing extends Model<Listing> {
    @Field(() => String)
    @Column(DataType.STRING)
    declare name: string;

    @Field()
    @Column(DataType.INTEGER)
    declare price: number;

    @Field()
    @Column(DataType.STRING)
    declare currency: string;

    @Field()
    @Column(DataType.BOOLEAN)
    declare active: boolean;

    @Field()
    @Column(DataType.BOOLEAN)
    declare onHold: boolean;

    @Field(() => String)
    @ForeignKey(() => User)
    @Column(DataType.STRING)
    declare createdBy?: string | null;

    @Field(() => String)
    @Column(DataType.STRING)
    declare updatedBy?: string | null;

    @Field(() => String)
    @Column(DataType.STRING)
    declare deletedBy?: string | null;

    @BelongsTo(() => User)
    user: User;

    // @Column(DataType.STRING)
    // createdAt: string;

    // @Column(DataType.STRING)
    // updatedAt: string;

    // @Column(DataType.STRING)
    // deletedAt: string;
}


