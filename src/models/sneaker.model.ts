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
  purchase_date?: string;

  @property({
    type: 'string',
  })
  sale_date?: string;

  @property({
    type: 'string',
  })
  buyer?: string;

  @property({
    type: 'string',
  })
  retail_price?: string;

  @property({
    type: 'string',
  })
  resell_price?: string;

  @property({
    type: 'number',
  })
  quantity?: number;

  constructor(data?: Partial<Sneaker>) {
    super(data);
  }
}
