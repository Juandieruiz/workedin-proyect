import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthRegisterService {

    // Variable que nos sirve para saber si el usuario está o no logueado
    private _isRegisterIn: boolean = false;
  
    // Inyectamos el HttClient para hacer peticiones HTTP a endpoints
    constructor(private http: HttpClient) {
  
    }
  
    // Método para que desde EL Guard o cualquier punto de la aplicación
    // podamos saber si el usuario está o no logueado
    get isRegisterIn(): boolean{
      return this._isRegisterIn
    }
  
    // Método para que desde fuera, podamos setear el valor de isLoggedIn
    setisRegisterIn(valor: boolean){
      this._isRegisterIn = valor;
      // Persistimos el valor de loggedIn en el SessionStorage del navegador
      sessionStorage.setItem('isRegisterIn', valor.toString());
    }
  
  
    // ! DEPRECATED: Método de LOGIN de usuario de prueba
    // login(email: string, password:string ): Observable<boolean> {
  
    //   if (email === 'admin' && password === 'admin') {
    //     return of(true) // El usuario se logueado correctamente
    //   }
  
    //   return of(false) // El usuario no se ha loguado correctamente
    // }
  
    // Método Login que realiza petición HTTP a: https://reqres.in/api/login
    // Este enpoint espera:
    // UN POST con:
    // {email: 'eve.holt@reqres.in', password: 'pistol'}
    // Este enpoint nos devuelve:
    // SI TODO HA IDO BIEN:
    // un código 200 y una RESPUESTA JSON CON: { "id"= 4,"token": "QpwL5tke4Pnpja7X4" }
    // SI ALGO HA SALIDO MAL (email erróneo)
    // { "error": "Missing password" }
    loginHttp(email: string, password: string): Observable<any> {
  
      // Construir el BODY del POST
      const body = {
        email, // email: email
        password // password: password
      };
  
      // Devolvemos el Observable para que el componente se suscriba y acceda a la respuesta de la petición
      return this.http.post('https://reqres.in/api/register', body)
  
    } 
    // Método para salir de la aplicación
    logout() {
      this.setisRegisterIn(false)
    }
  }
  
