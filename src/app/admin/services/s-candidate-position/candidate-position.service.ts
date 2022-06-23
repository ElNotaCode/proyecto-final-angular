import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

<<<<<<< HEAD


/**
 * @Author Marc Lopez
 */

const apiUrl: string = 'http://localhost:8181/api/candidatePosition';

=======
const apiUrl: string = 'http://localhost:8181/api/candidatePosition';
>>>>>>> master
@Injectable({
  providedIn: 'root',
})

export class CandidatePositionService {
  // TODO: Pasar a la URL de heroku cuando funcione

<<<<<<< HEAD
//importamos HttpClient y lo pasamos como parametro al constructor
 constructor(private httpClient: HttpClient) {}
=======
  //importamos HttpClient y lo pasamos como parametro al constructor
  constructor(private httpClient: HttpClient) {}

  //list() nos mostrará todos los registros

  listCandidatePosition(): Observable<any> {
    //TODO: Añadir handle error
    return this.httpClient.get(apiUrl);
  }
>>>>>>> master

  //R
  readCandidatePosition(id: any): Observable<any> {
    return this.httpClient.get(`${apiUrl}/${id}`);
  }

<<<<<<< HEAD
 listCandidatePosition(): Observable<any>{
  //TODO: Añadir handle error
  return this.httpClient.get(apiUrl);
 }


   //C
  //createSkll, se le pasa un objeto skill por parametro al que
  //llamamos data y le decimos que es de tipo any
  createCandidatePosition(data: any): Observable<any> {
    return this.httpClient.post(apiUrl, data);
  }

=======
  //U
  updateCandidatePosition(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${apiUrl}/${id}`, data);
  }

  //D
  deleteCandidatePosition(id: any): Observable<any> {
    return this.httpClient.delete(`${apiUrl}/${id}`);
  }
>>>>>>> master
}
