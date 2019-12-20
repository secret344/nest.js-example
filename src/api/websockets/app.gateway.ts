import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { SocketsCenter } from './ws.service';
import { Socket, Server } from 'socket.io';
import { Observable, of } from 'rxjs';

@WebSocketGateway({ namespace: 'socket' })
export class WsService {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('response')
  onGreet(client: Socket, payload: any) {
    SocketsCenter.register(client);
    client.emit('response', {
      message: `received: ${JSON.stringify(payload)}`,
    });
  }

  @SubscribeMessage('hello')
  onEvent(client: Socket, payload: any): Observable<WsResponse<any>> | any {
    SocketsCenter.register(client);
    return of({
      event: 'hello',
      data: {
        message: `hello ${payload.name}!`,
      },
    });
  }
  @SubscribeMessage(null)
  onA(client: Socket, payload: any): Observable<WsResponse<any>> | any {
    SocketsCenter.register(client);
    return of({
      event: 'hello',
      data: {
        message: `hello ${payload.name}!`,
      },
    });
  }
}
