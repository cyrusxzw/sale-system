import { DefaultCrudRepository } from '@loopback/repository';
import { Sneaker } from '../models';
import { MlabDataSource } from '../datasources';
export declare class SneakerRepository extends DefaultCrudRepository<Sneaker, typeof Sneaker.prototype.id> {
    constructor(dataSource: MlabDataSource);
}
