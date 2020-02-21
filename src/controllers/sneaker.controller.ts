import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  del,
  requestBody,
} from '@loopback/rest';
import {Sneaker} from '../models';
import {SneakerRepository} from '../repositories';

export class SneakerController {
  constructor(
    @repository(SneakerRepository)
    public sneakerRepository: SneakerRepository,
  ) {}

  @post('/sneakers', {
    responses: {
      '200': {
        description: 'sneaker model instance',
        content: {'application/json': {schema: {'x-ts-type': Sneaker}}},
      },
    },
  })
  async create(@requestBody() sneaker: Sneaker): Promise<Sneaker> {
    return await this.sneakerRepository.create(sneaker);
  }

  @get('/sneakers/count', {
    responses: {
      '200': {
        description: 'sneaker model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Sneaker)) where?: Where,
  ): Promise<Count> {
    return await this.sneakerRepository.count(where);
  }

  @get('/sneakers', {
    responses: {
      '200': {
        description: 'Array of sneaker model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Sneaker}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Sneaker)) filter?: Filter,
  ): Promise<Sneaker[]> {
    return await this.sneakerRepository.find(filter);
  }

  @patch('/sneakers/{id}', {
    responses: {
      '204': {
        description: 'Order PATCH success',
      },
    },
  })
  async updateById(
    @param({name: 'id', in: 'path'}) id: string,
    @requestBody() sneaker: Sneaker,
  ): Promise<void> {
    await this.sneakerRepository.updateById(id, sneaker);
  }

  @del('/sneakers/{id}', {
    responses: {
      '204': {
        description: 'sneaker DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.sneakerRepository.deleteById(id);
  }
}
