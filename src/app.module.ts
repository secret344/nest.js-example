import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsModule } from './api/cats/cats.modules';
import { WsModule } from './api/websockets/ws.modules';
import { AuthModule } from './api/auth/auth.module';
import { UsersModule } from './api/users/users.module';
@Module({
  imports: [TypeOrmModule.forRoot(), CatsModule, WsModule, AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
