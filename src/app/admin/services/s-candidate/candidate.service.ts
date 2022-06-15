import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

/**
 * @Author Eloi Martorell Martín
 */

const apiUrl: string = 'http://localhost:8181/api/candidates';

@Injectable({
  providedIn: 'root',
})
export class CandidateService {
  //TODO: Pasar a la URL de heroku cuando funcione
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  //importamos HttpClient y lo passamos como parametro al constructor
  constructor(private httpClient: HttpClient) {}

  //list() nos mostrará todos los registros
  listCandidates(): Observable<any> {
    //TODO: Añadir handle error
    return this.httpClient.get(apiUrl);
  }

  //C
  //createSkll, se le pasa un objeto skill por parametro al que
  //llamamos data y le decimos que es de tipo any
  createCandidates(data: any): Observable<any> {
    return this.httpClient.post(apiUrl, data);
  }

  //R
  readCandidates(id: any): Observable<any> {
    return this.httpClient.get('${apiUrl}/${id}');
  }

  //U
  updateCandidates(id: any, data: any): Observable<any> {
    return this.httpClient.put('${apiUrl}/${id}', data);
  }

  //D
  deleteCandidates(id: any): Observable<any> {
    return this.httpClient.delete('${apiUrl}/${id}');
  }
}
