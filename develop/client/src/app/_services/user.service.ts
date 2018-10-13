import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }
    apiUrl = environment.apiUrl;
    getAll() {
        return this.http.get<User[]>( this.apiUrl + '/api/users');
    }
}
