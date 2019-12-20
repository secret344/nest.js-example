import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsModule } from './api/cats/cats.modules';
import { WsModule } from './api/websockets/ws.modules';
@Module({
  imports: [TypeOrmModule.forRoot(), CatsModule, WsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
