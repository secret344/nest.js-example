import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './cat.interface';
import { Transaction, TransactionManager, EntityManager } from 'typeorm';
import { RolesGuard } from '../auth/auth.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('cats')
@UseGuards(RolesGuard)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post('test') 
  @Roles('admin')
  @Transaction()
  async create(
    @Body() param: { id: number },
    @TransactionManager() manager: EntityManager,
  ): Promise<any> {
    return this.catsService.create(manager, param.id);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
