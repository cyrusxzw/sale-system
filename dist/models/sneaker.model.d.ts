import { Entity } from '@loopback/repository';
export declare class Sneaker extends Entity {
    id?: string;
    name?: string;
    size?: string;
    buy_time?: String;
    sold_time?: String;
    buy_price?: String;
    sold_price?: String;
    buyer?: string;
    constructor(data?: Partial<Sneaker>);
}
