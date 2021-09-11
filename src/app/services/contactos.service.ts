import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  constructor(private _http: HttpClient) { }


  // Traer la lista de contactos
  getContactos(): Observable<any> {
    // Aquí dentro hacer la petición http a la ruta "https://reqres.in/api/users"
    // y devolver un Observable con una lista de contactos
    // Recordemos que reqres.in devuelve un JSON que tiene la lista dentro de DATA
    // por lo que tenéis que devolver la "respuesta.data" que es donde está el []
    return this._http.get('https://reqres.in/api/users?page=2');
  }

  // Traer un contacto
  getContacto(id: number): Observable<any>{
    return this._http.get(`https://reqres.in/api/users/${id}`);
  }


}