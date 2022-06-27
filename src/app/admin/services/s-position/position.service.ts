import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/*
 * @Author Marc Lopez
 */

// TODO: Pasar a la URL de heroku cuando funcione
const apiUrl: string = 'https://entrevista-tecnica-api.herokuapp.com/api/positions';

@Injectable({
  providedIn: 'root',
})
export class PositionService {
  //TODO: Pasar a la URL de heroku cuando funcione
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  //importamos HttpClient y lo pasamos como parametro al constructor
  constructor(private httpClient: HttpClient) {}

  //list() nos mostrará todos los registros

  listPosition(): Observable<any> {
    //TODO: Añadir handle error
    return this.httpClient.get(apiUrl);
  }

  //createPosition, se le pasa un objeto Position por parametro al que
  //llamamos data y le decimos que es de tipo any
  createPosition(data: any): Observable<any> {
    return this.httpClient.post(apiUrl, data);
  }

  //R
  readPosition(id: any): Observable<any> {
    return this.httpClient.get(`${apiUrl}/${id}`);
  }

  //U
  updatePosition(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${apiUrl}/${id}`, data);
  }

  //D
  deletePosition(id: any): Observable<any> {
    return this.httpClient.delete(`${apiUrl}/${id}`);
  }
}
