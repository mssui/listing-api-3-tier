import {
    IsNumber,
    IsBoolean,
    IsNotEmpty,
    IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class BaseListing {
    @ApiProperty({ example: "admin", description: 'createdBy can be null or pass the user ID' })
    createdBy: string | null;

    @ApiProperty({ example: "admin", description: 'updatedBy can be null or pass the user ID' })
    updatedBy: string | null;

    @ApiProperty({ example: "admin", description: 'deletedBy can be null or pass the user ID' })
    deletedBy: string | null;

    @ApiProperty({ example: "2025-10-22 10:32:18.921 +00:00", description: 'Creation time or null' })
    createdAt?: string | null;

    @ApiProperty({ example: null, description: 'Updation time or null' })
    updatedAt?: string | null;

    @ApiProperty({ example: null, description: 'Deletion time or null' })
    deletedAt?: string | null;
}

export class CreateListingDto extends BaseListing {
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
