import { Injectable, NgZone } from '@angular/core';
import { Socket } from 'ng6-socket-io';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SocketService extends Socket {

  constructor(
    ngZone: NgZone
  ) {
    super({ url: 'http://localhost:3000/', options: {} }, ngZone);
  }

  getMessage() {
    return this.fromEvent<any>('events')
      .pipe(
        map(data => {
            return data;
        })
      );
  }

  sendMessage(msg: any) {
    this.emit('events', msg);
  }
}
