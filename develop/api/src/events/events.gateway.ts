import {
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
    WsResponse,
    OnGatewayConnection,
    OnGatewayDisconnect,
    OnGatewayInit
  } from '@nestjs/websockets';
  import { from, Observable } from 'rxjs';
  import { map } from 'rxjs/operators';
  
  @WebSocketGateway()
  export class EventsGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

    @WebSocketServer() server;
  
    afterInit(server){
        // console.log('socket server', server)
    }

    handleConnection(client){
        console.log('connection',client.client.id)
        client.emit('msg','welcome ' + client.client.id);
    }

    handleDisconnect(client){
        console.log('disconnect',client.client.id)
    }

    @SubscribeMessage('events')
    findAll(client, data): Observable<WsResponse<number>> {
        // console.log(client.client);  
        return from([1, 2, 3, data]).pipe(map(item => ({ event: 'events', data: item })));
    }
  
    @SubscribeMessage('identity')
    async identity(client, data: number): Promise<number> {
      return data;
    }
  }
  