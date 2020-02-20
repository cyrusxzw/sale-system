import {Entity, model, property} from '@loopback/repository';

@model()
export class Sneaker extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  size?: string;

  @property({
    type: 'string',
  })
  buy_time?: String;

  @property({
    type: 'string',
  })
  sold_time?: String;

  @property({
    type: 'string',
  })
  buy_price?: String;

  @property({
    type: 'string',
  })
  sold_price?: String;

  @property({
    type: 'string',
  })
  buyer?: string;

  constructor(data?: Partial<Sneaker>) {
    super(data);
  }
}
