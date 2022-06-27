import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * @Author Eloi Martorell Martín
 */

const LOGIN_URL = 'http://localhost:8181/login';
const REGISTER_URL = 'http://localhost:8181/users/';

const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  //post a localhost:8181/login para logearnos
  login(username: string, password: string): Observable<any> {
    return this.httpClient.post(
      LOGIN_URL,
      {
        username,
        password,
      },
      httpOptions
    );
  }

  register(username: string, password: string, role: string): Observable<any> {
    return this.httpClient.post(
      REGISTER_URL,
      {
        username,
        password,
        role,
      },
      httpOptions
    );
  }
}
