import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  
  constructor(private _router: Router) { }

  
  ngOnInit() {
    // Obtenemos el isLoggedIn del SessionStorage
    // Debemos comprobar el valor de SessionStorage que viene como string
    // hacemos una comparación y nos quedamos con el true/false de la comparación
    const logged: boolean = (sessionStorage.getItem('isLoggedIn') == 'true');

    // Controlamos que si, está logeado en la sessionStorage, pasamos a
    // false el dato
    if (logged) {
      sessionStorage.setItem('isLoggedIn', 'false')
    }
  }
}
