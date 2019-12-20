import { Module } from '@nestjs/common';
import { WsService } from './app.gateway';
import { SocketsCenter } from './ws.service';
@Module({
  imports: [],
  providers: [WsService, SocketsCenter],
  exports: [SocketsCenter],
})
export class WsModule {}
