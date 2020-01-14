import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PassportModule.register({defaultStrategy:'jwt'})],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule  {}
