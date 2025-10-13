import { Column, Model, Table, DataType, AllowNull } from 'sequelize-typescript';
import { DataTypes } from '@sequelize/core';

@Table({ paranoid: true })
export class Listing extends Model<Listing> {
    @Column(DataType.STRING)
    declare name: string;

    @Column(DataType.INTEGER)
    declare price: number;

    @Column(DataType.STRING)
    declare currency: string;

    @Column(DataType.BOOLEAN)
    declare active: boolean;

    @Column(DataType.BOOLEAN)
    declare onHold: boolean;

    @Column(DataType.STRING)
    declare createdBy?: string | null;

    @Column(DataType.STRING)
    declare updatedBy?: string | null;

    @Column(DataType.STRING)
    declare deletedBy?: string | null;

    // @Column(DataType.STRING)
    // createdAt: string;

    // @Column(DataType.STRING)
    // updatedAt: string;

    // @Column(DataType.STRING)
    // deletedAt: string;
}


