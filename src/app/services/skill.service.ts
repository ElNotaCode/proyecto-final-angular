import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

/**
 * @Author Eloi Martorell Martín
 */

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  //TODO: Pasar a la URL de heroku cuando funcione
  apiUrl: string = 'localhost:8181/api/skills';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  //importamos HttpClient y lo passamos como parametro al constructor
  constructor(private httpClient: HttpClient) {}

  //list() nos mostrará todos los registros
  listSkills(): Observable<any> {
    //TODO: Añadir handle error
    return this.httpClient.get(this.apiUrl);
  }

  //C
  //createSkll, se le pasa un objeto skill por parametro al que
  //llamamos data y le decimos que es de tipo any
  createSkill(data: any): Observable<any> {
    return this.httpClient.post(this.apiUrl, data);
  }

  //R
  readSkill(id: any): Observable<any> {
    return this.httpClient.get('${this.apiUrl}/${id}');
  }

  //U
  updateSkill(id: any, data: any): Observable<any> {
    return this.httpClient.put('${this.apiUrl}/${id}', data);
  }

  //D
  deleteSkill(id: any): Observable<any> {
    return this.httpClient.delete('${this.apiUrl}/${id}');
  }

  //Funcionalidades extras

  //filterByName() filtrará por un nombre que podemos introducir en un buscador
  filterByName(skill_name: string): Observable<any> {
    return this.httpClient.delete('${this.apiUrl}/${skill_name}');
  }
}
