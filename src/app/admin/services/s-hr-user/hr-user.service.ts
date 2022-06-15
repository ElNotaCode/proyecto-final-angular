import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/*
* @Author Borja Montseny
*/

@Injectable({
  providedIn: 'root'
})
export class HrUserService {

  // TODO: Pasar a la URL de Heroku cuando funcione

  apiURL: string = 'http://localhost:8181/api/hrUsers';

  // importamos HttpClient y lo pasamos
  constructor(private httpClient: HttpClient) {}

  // list() nos mostrará todos los registros
  listHrUser(): Observable<any>{
    // TODO: Añadir handle error
    return this.httpClient.get(this.apiURL);
  }


}
