import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


/*
* @Author Marc Lopez
*/



@Injectable({
  providedIn: 'root',
})
export class PositionService {


  // TODO: Pasar a la URL de heroku cuando funcione
  apiUrl: string = 'http://localhost:8181/api/positions';


  //importamos HttpClient y lo pasamos como parametro al constructor
   constructor(private httpClient: HttpClient) {}

   //list() nos mostrará todos los registros

   listPosition(): Observable<any>{
    //TODO: Añadir handle error
    return this.httpClient.get(this.apiUrl);
   }



}
