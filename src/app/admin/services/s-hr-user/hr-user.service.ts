import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * @Author Borja Montseny
 */

const apiURL: string = 'http://localhost:8181/api/hrUsers';

@Injectable({
  providedIn: 'root'
})
export class HrUserService {
  //TODO: Pasar a la URL de heroku cuando funcione
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  // importamos HttpClient y lo pasamos
  constructor(private httpClient: HttpClient) {}

  // list() nos mostrará todos los registros
  listHrUser(): Observable<any>{
    // TODO: Añadir handle error
    return this.httpClient.get(apiURL);
  }

  createHrUser(data: any): Observable<any> {
    return this.httpClient.post(apiURL, data);
  }

  //R
  readHrUser(id: any): Observable<any> {
    return this.httpClient.get('${apiURL}/${id}');
  }

  //U
  updateHrUser(id: any, data: any): Observable<any> {
    return this.httpClient.put('${apiURL}/${id}', data);
  }

  //D
  deleteHrUser(id: any): Observable<any> {
    return this.httpClient.delete('${apiURL}/${id}');
  }

}
