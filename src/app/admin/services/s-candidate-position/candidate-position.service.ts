import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const apiUrl: string = 'https://entrevista-tecnica-api.herokuapp.com/api/candidatePosition';
@Injectable({
  providedIn: 'root',
})
export class CandidatePositionService {
  // TODO: Pasar a la URL de heroku cuando funcione

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  //importamos HttpClient y lo pasamos como parametro al constructor
  constructor(private httpClient: HttpClient) {}

  //list() nos mostrará todos los registros

  createCandidatePosition(data: any): Observable<any> {
    return this.httpClient.post(apiUrl, data);
  }

  listCandidatePosition(): Observable<any> {
    //TODO: Añadir handle error
    return this.httpClient.get(apiUrl);
  }

  //R
  readCandidatePosition(id: any): Observable<any> {
    return this.httpClient.get(`${apiUrl}/${id}`);
  }

  //U
  updateCandidatePosition(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${apiUrl}/${id}`, data);
  }

  //D
  deleteCandidatePosition(id: any): Observable<any> {
    return this.httpClient.delete(`${apiUrl}/${id}`);
  }
}
