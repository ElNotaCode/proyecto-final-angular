import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatePositionService {

// TODO: Pasar a la URL de heroku cuando funcione
apiUrl: string = 'http://localhost:8181/api/candidatePosition';


//importamos HttpClient y lo pasamos como parametro al constructor
 constructor(private httpClient: HttpClient) {}

 //list() nos mostrará todos los registros

 listCandidatePosition(): Observable<any>{
  //TODO: Añadir handle error
  return this.httpClient.get(this.apiUrl);
 }

}
