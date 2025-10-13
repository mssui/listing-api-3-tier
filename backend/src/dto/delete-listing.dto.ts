import {
    IsUUID,
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

export class DeleteListingDto extends BaseListing {
    @IsUUID()
    @IsNotEmpty()
    @ApiProperty({
        description: 'ID of the Listing',
    })
    listingId: string;
}
