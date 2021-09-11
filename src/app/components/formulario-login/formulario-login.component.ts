import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

// Para poder navegar a una ruta desde el código usamos Router
// Lo vamos a inyectar en el constructor para poder usar sus métodos
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.scss']
})
export class FormularioLoginComponent implements OnInit {

  // Creamos nuetsro formulario de login
  formularioLogin: FormGroup = this._formBuilder.group({})

  // Inyectamos en en constructor el FormBuilder y el servicio de Autenticación
  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _router: Router
  ) { }

  ngOnInit(): void {

    // Definimos la estructura y los campos del formulario, además de su validación
    // a través del formbuilder, y sus funciones, que os ofrece Angular y tenemos inyectado en el constructor
    this.formularioLogin = this._formBuilder.group({
      email: ['eve.holt@reqres.in', Validators.required],
      password: ['12345', Validators.required]
    });

  }

  // Método para enviar al servicio los datos del formulario y hacer login
  enviar() {

    // Antes de hacer nada, comrpobamos que todos los campos el formulario son válidos
    // En caso que que alguno no cumpla con la validación (obligatorios)
    // mostramos una alerta y no ejecutamos nada
    if (this.formularioLogin.invalid) {
      alert('Todos los campos son obligatorios')
      return;
    }

    // Creamos dos variables locales (user y password) a partir de los valores de formularioLogin
    let { email, password } = this.formularioLogin.value;

    // Llamamos al método login del servicio para que se encargue de enviar/comprobar los datos de autenticación
    // Cuando se resuelva su ejecución, obtendremos un boolean (true o false) que debemos consumir en el subscribe

    // this._authService.loginHttp(email, password).subscribe(
    //   (respuesta: any) => {
    //     console.log('Respuesta:', respuesta) // respuesta dentro tiene: {token: valor}
    //     if (respuesta.token) {
    //       alert('LOGIN EXITOSO --> Navegar a HOME')
    //     } else {
    //       alert(`Email: ${email} o Password: ${password} Erróneos`)
    //     }
    //   },
    //   (err: any) => console.log(`Error al hacer la petición: ${err}`),
    //   () => console.log('Petición Terminada')
    // )

    this._authService.loginHttp(email, password).subscribe(
      (respuesta: any) => {
        if(respuesta.token){
          // alert('LOGIN EXITOSO --> Navegar a HOME');
          // Ponemos el _isLoggedIn a true
          this._authService.setIsLoggedIn(true);
          // Dado que todo ha ido bien, navegamos a HOME
          this._router.navigate(["home"]);
          console.log(respuesta.token)
        } else {
          alert(`Email: ${email} o Password: ${password} Erróneos`);
          // Ponemos el _isLoggedIn a false
          this._authService.setIsLoggedIn(false);
        }
      },
      (error: any) => {
        alert(`Ha habido algún error en el servidor: ${error}`);
        // Ponemos el _isLoggedIn a false
        this._authService.setIsLoggedIn(false);
      },
      () => {
        console.log('Petición terminada con éxito');
      }
    );

  }

}
