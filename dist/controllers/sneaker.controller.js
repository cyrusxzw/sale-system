"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SneakerController = class SneakerController {
    constructor(sneakerRepository) {
        this.sneakerRepository = sneakerRepository;
    }
    async create(sneaker) {
        return await this.sneakerRepository.create(sneaker);
    }
    async count(where) {
        return await this.sneakerRepository.count(where);
    }
    async find(filter) {
        return await this.sneakerRepository.find(filter);
    }
    async updateById(id, sneaker) {
        await this.sneakerRepository.updateById(id, sneaker);
    }
    async deleteById(id) {
        await this.sneakerRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/sneakers', {
        responses: {
            '200': {
                description: 'sneaker model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Sneaker } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Sneaker]),
    __metadata("design:returntype", Promise)
], SneakerController.prototype, "create", null);
__decorate([
    rest_1.get('/sneakers/count', {
        responses: {
            '200': {
                description: 'sneaker model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Sneaker))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SneakerController.prototype, "count", null);
__decorate([
    rest_1.get('/sneakers', {
        responses: {
            '200': {
                description: 'Array of sneaker model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Sneaker } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Sneaker))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SneakerController.prototype, "find", null);
__decorate([
    rest_1.patch('/sneakers/{id}', {
        responses: {
            '204': {
                description: 'Order PATCH success',
            },
        },
    }),
    __param(0, rest_1.param({ name: 'id', in: 'path' })),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Sneaker]),
    __metadata("design:returntype", Promise)
], SneakerController.prototype, "updateById", null);
__decorate([
    rest_1.del('/sneakers/{id}', {
        responses: {
            '204': {
                description: 'sneaker DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SneakerController.prototype, "deleteById", null);
SneakerController = __decorate([
    __param(0, repository_1.repository(repositories_1.SneakerRepository)),
    __metadata("design:paramtypes", [repositories_1.SneakerRepository])
], SneakerController);
exports.SneakerController = SneakerController;
//# sourceMappingURL=sneaker.controller.js.map