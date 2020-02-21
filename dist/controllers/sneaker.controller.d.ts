import { Count, Filter, Where } from '@loopback/repository';
import { Sneaker } from '../models';
import { SneakerRepository } from '../repositories';
export declare class SneakerController {
    sneakerRepository: SneakerRepository;
    constructor(sneakerRepository: SneakerRepository);
    create(sneaker: Sneaker): Promise<Sneaker>;
    count(where?: Where): Promise<Count>;
    find(filter?: Filter): Promise<Sneaker[]>;
    updateById(id: string, sneaker: Sneaker): Promise<void>;
    deleteById(id: string): Promise<void>;
}
