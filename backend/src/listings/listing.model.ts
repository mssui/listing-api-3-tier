import { Column, Model, Table } from 'sequelize-typescript';
import { DataTypes } from '@sequelize/core';


@Table({ paranoid: true })
export class Listing extends Model {

  @Column({ defaultValue: true })
  active: boolean;

  @Column({ defaultValue: false })
  onHold: boolean;

  @Column
  createdBy: string;

  @Column
  updatedBy: string;

  @Column
  deletedBy: string;
}
