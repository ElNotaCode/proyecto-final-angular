import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

/**
 * @Author Borja Montseny Peris
 */

const apiUrl: string = 'http://localhost:8181/api/candidateSkills';

@Injectable({
  providedIn: 'root',
})
export class CandidateSkillService {
  //TODO: Pasar a la URL de heroku cuando funcione
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  //importamos HttpClient y lo passamos como parametro al constructor
  constructor(private httpClient: HttpClient) {}

  //list() nos mostrará todos los registros
  listCandidateSkills(): Observable<any> {
    //TODO: Añadir handle error
    return this.httpClient.get(apiUrl);
  }

  //C
  createCandidateSkill(data: any): Observable<any> {
    return this.httpClient.post(apiUrl, data);
  }

  //R
  readCandidateSkill(id: any): Observable<any> {
    return this.httpClient.get(`${apiUrl}/${id}`);
  }

  //U
  updateCandidateSkill(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${apiUrl}/${id}`, data);
  }

  //D
  deleteCandidateSkill(id: any): Observable<any> {
    return this.httpClient.delete(`${apiUrl}/${id}`);
  }
}
