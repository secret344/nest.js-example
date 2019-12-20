import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './cat.interface';
import { Transaction, TransactionManager, EntityManager } from 'typeorm';
import { PhotoEntity } from '../../entity/photo/photo.entity';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post('test')
  @Transaction()
  async create(
    @Body() param: { id: number },
    @TransactionManager() manager: EntityManager,
  ): Promise<PhotoEntity> {
    return this.catsService.create(manager, param.id);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
