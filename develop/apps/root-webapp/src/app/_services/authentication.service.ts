import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

import { environment } from '../../environments/environment';

import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  user$: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  apiUrl = environment.apiUrl;

  login(username: string, password: string) {
    const authURL = this.apiUrl + '/api/auth/authenticate';
    return this.http
      .post<any>(authURL, {
        authenticateDto: {
          username: username,
          password: password
        }
      })
      .pipe(
        map((res: any) => {
          // login successful if there's a jwt token in the response
          if (res && res.data && res.data.accessToken) {
            // store username and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem(
              'currentUser',
              JSON.stringify({ username, token: res.data.accessToken, displayName: res.data.displayName })
            );
            res.data.username = username;
            console.log(res.data);
            this.user$.next(res.data);
          }
        })
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.user$.next(null);
  }

  register(registration: User) {
    const authURL = this.apiUrl + '/api/users';
    return this.http
      .post<any>(authURL, registration)
      .pipe(
        map((res: any) => {
          console.log(res);
          // registration successful if there's a jwt token in the response
          if (res && res.data && res.data.accessToken) {
            // store username and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem(
              'currentUser',
              JSON.stringify({ username: registration.username, token: res.data.accessToken, displayName: registration.displayName })
            );
            this.user$.next(res.data);
          }
        })
      );
  }
}
