import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { environment } from '@env/environment';
import { AuthType, AuthDTO } from '@app/models/auth';
import { User } from '@app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api: string = environment.api_server + '/auth';

  constructor(private http: HttpClient) {}

  private auth(authType: AuthType, data: AuthDTO): Observable<User> {
    return this.http.post<User>(`${this.api}/${authType}`, data).pipe(
      mergeMap((user: User) => {
        this.token = user.token;
        return of(user);
      })
    );
  }

  login(data: AuthDTO): Observable<User> {
    return this.auth('login', data);
  }

  register(data: AuthDTO): Observable<User> {
    return this.auth('register', data);
  }

  whoami() {
    return this.http.get(`${this.api}/whoami`, {
      headers: { authorization: `Bearer ${this.token}` }
    });
  }

  get token(): string {
    return localStorage.getItem('idea_token');
  }

  set token(val: string) {
    if (val) {
      localStorage.setItem('idea_token', val);
    } else {
      localStorage.clear();
    }
  }
}
