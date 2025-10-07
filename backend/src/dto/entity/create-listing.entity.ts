
import {
  IsAlphanumeric,
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

export class CreateListing {
  name: string;
  price: number;
  currency: string;
  active: boolean;
  onHold: boolean;
  createdBy: string;
  updatedBy: string;
  deletedBy: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}
