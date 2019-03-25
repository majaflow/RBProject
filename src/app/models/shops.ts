import { ArrayType } from '@angular/compiler';

export interface Shops {
    id: number;
    name: string;
    location: string;
    favoriteDrink: string;
    note: string;
    owner: string;
    comment: Array<string>
}