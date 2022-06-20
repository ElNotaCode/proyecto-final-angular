import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * @Author Eloi Martorell Martín
 */

//TODO: Pasar a la URL de Heroku
const URL = 'http://localhost:8181/users/';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private httpClient: HttpClient) {}

  //Pilla todos los users
  getPublicContent(): Observable<any> {
    return this.httpClient.get(URL, { responseType: 'text' });
  }

  //TODO: Falta pillar por roles
}
