import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

/**
 * @Author Eloi Martorell Martín
 */

const apiUrl: string = 'http://localhost:8181/api/skills';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  //TODO: Pasar a la URL de heroku cuando funcione
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  //importamos HttpClient y lo passamos como parametro al constructor
  constructor(private httpClient: HttpClient) {}

  //list() nos mostrará todos los registros
  listSkills(): Observable<any> {
    //TODO: Añadir handle error
    return this.httpClient.get(apiUrl);
  }

  //C
  //createSkll, se le pasa un objeto skill por parametro al que
  //llamamos data y le decimos que es de tipo any
  createSkill(data: any): Observable<any> {
    return this.httpClient.post(apiUrl, data);
  }

  //R
  readSkill(id: any): Observable<any> {
    return this.httpClient.get('${apiUrl}/${id}');
  }

  //U
  updateSkill(id: any, data: any): Observable<any> {
    return this.httpClient.put('${apiUrl}/${id}', data);
  }

  //D
  deleteSkill(id: any): Observable<any> {
    return this.httpClient.delete('${apiUrl}/${id}');
  }
}
