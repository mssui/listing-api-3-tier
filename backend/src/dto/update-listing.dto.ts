import {
    IsNumber,
    IsBoolean,
    IsNotEmpty,
    IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class BaseListing {
    createdBy: string | null;
    updatedBy: string | null;
    deletedBy: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    deletedAt?: string | null;
}

export class UpdateListingDto extends BaseListing {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        example: 'Old Magazines from 1954 USA Published',
        description: 'The name of the Listing',
    })
    name: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ example: 35, description: 'The price of the Listing' })
    price: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: '$', description: 'The currency of the Listing' })
    currency: string;

    @IsBoolean()
    @IsNotEmpty()
    @ApiProperty({
        example: false,
        description: 'If the Listing is active or not',
    })
    active: boolean;

    @IsBoolean()
    @IsNotEmpty()
    @ApiProperty({
        example: true,
        description: 'If the listing is onHold or not',
    })
    onHold: boolean;
}
