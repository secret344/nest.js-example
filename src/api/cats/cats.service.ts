import { Injectable } from '@nestjs/common';
import { Cat } from './cat.interface';
import { EntityManager } from 'typeorm';
import { PhotoEntity } from '../../entity/photo/photo.entity';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  async create(manager: EntityManager, id: number): Promise<PhotoEntity> {
    let p = await manager.findOne(PhotoEntity, {
      where: { id },
    });
    if (!p) {
      let psd = await manager.create(PhotoEntity, {
        name: 'test',
        description: 'ceshi',
        filename: 'filename',
        views: 123,
        isPublished: false,
      });
      await manager.save(psd);
      return psd;
    }
    return p;
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
