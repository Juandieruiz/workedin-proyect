import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Variable que nos sirve para saber si el usuario está o no logueado
  private _isLoggedIn: boolean = false;

  // Inyectamos el HttClient para hacer peticiones HTTP a endpoints
  constructor(private http: HttpClient) {

  }

  // Método para que desde EL Guard o cualquier punto de la aplicación
  // podamos saber si el usuario está o no logueado
  get isLoggedIn(): boolean{
    return this._isLoggedIn
  }

  // Método para que desde fuera, podamos setear el valor de isLoggedIn
  setIsLoggedIn(valor: boolean){
    this._isLoggedIn = valor;
    // Persistimos el valor de loggedIn en el SessionStorage del navegador
    sessionStorage.setItem('isLoggedIn', valor.toString());
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
  // {email: 'eve.holt@reqres.in', password: 'cityslicka'}
  // Este enpoint nos devuelve:
  // SI TODO HA IDO BIEN:
  // un código 200 y una RESPUESTA JSON CON: { "token": "QpwL5tke4Pnpja7X4" }
  // SI ALGO HA SALIDO MAL (email erróneo)
  // { "error": "Missing password" }
  loginHttp(email: string, password: string): Observable<any> {

    // Construir el BODY del POST
    const body = {
      email, // email: email
      password // password: password
    };

    // Devolvemos el Observable para que el componente se suscriba y acceda a la respuesta de la petición
    return this.http.post('https://reqres.in/api/login', body)

    // Guardamos la suscripción/observable del POST de http en una constante http$
    // El $ se usa para hacer referencia a variable sque no tienen un valor actual, sino futuro
    // Es decir, variables que nos van a dar un valor cuando nos emita la respuesta en el futuro
    // TODO: Descomentar si se quiere probar
    // const http$ = this.http.post('https://reqres.in/api/login', body)
    // http$.subscribe(
    //   (respuesta: any) => {
    //     console.log('Respuesta:', respuesta) // respuesta dentro tiene: {token: valor}
    //   },
    //   (err: any) => console.log(`Error al hacer la petición: ${err}`),
    //   () => console.log('Petición Terminada')
    // )
    // return of(true);

  }

  // Método para salir de la aplicación
  logout() {
    this.setIsLoggedIn(false)
  }
}
