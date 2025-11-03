
export interface BaseListing {
    createdBy: string | null;
    updatedBy: string | null;
    deletedBy: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    deletedAt?: string | null;
}

export interface CreateListingDto extends BaseListing {
    name: string;
    price: number;
    currency: string;
    active: boolean;
    onHold: boolean;
}
