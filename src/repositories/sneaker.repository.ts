import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Sneaker} from '../models';
import {MlabDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SneakerRepository extends DefaultCrudRepository<
  Sneaker,
  typeof Sneaker.prototype.id
> {
  constructor(@inject('datasources.mlab') dataSource: MlabDataSource) {
    super(Sneaker, dataSource);
  }
}
