import { Component, OnInit, Output } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../../_models';
import { UserService } from '../../_services';
import { SocketService } from '../../_services/socket.service';

@Component({templateUrl: 'home.component.html'})
export class HomeComponent implements OnInit {
    users: User[] = [];
    @Output() messages: any[] = ['Hi', 'Works'];
    constructor(
       private userService: UserService,
       private socketService: SocketService
        ) {}

    ngOnInit() {
        // this.userService.getAll().pipe(first()).subscribe(users => {
        //     this.users = users;
        // });
        this.socketService
        .getMessage()
        .subscribe(
          msg => {
              console.log('msg', msg);
              this.messages.push(msg);
            }
        );
        this.socketService.sendMessage({ test: 'test' });
        this.socketService.on('connect', function() {
            console.log('I connected!');
        } );
        this.socketService.on('msg', function(data) {
            console.log('I got a message!', data);
        } );
        this.socketService.emit('identity', 12355, (response) => console.log('Identity:', response));
    }
}
