import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

// Para poder navegar a una ruta desde el código usamos Router
// Lo vamos a inyectar en el constructor para poder usar sus métodos
import { Router } from '@angular/router';
import { AuthRegisterService } from 'src/app/services/auth-register.service';

@Component({
  selector: 'app-formulario-register',
  templateUrl: './formulario-register.component.html',
  styleUrls: ['./formulario-register.component.scss']
})
export class FormularioRegisterComponent implements OnInit {

  formularioRegister: FormGroup = this._formBuilder.group({})

  constructor( private _formBuilder: FormBuilder,
    private _authRegisterService: AuthRegisterService,
    private _routerRegister: Router
  ) { }

  ngOnInit(): void {

    this.formularioRegister = this._formBuilder.group({
      email: ['eve.holt@reqres.in', Validators.required],
      password: ['pistol', Validators.required]
    });
  
  }
  enviar() {

    if (this.formularioRegister.invalid) {
      alert('Todos los campos son obligatorios')
      return;
    }

    // Creamos dos variables locales (user y password) a partir de los valores de formularioLogin
    let { email, password } = this.formularioRegister.value;

    

    this._authRegisterService.loginHttp(email, password).subscribe(
      (respuesta: any) => {
        if(respuesta.token){
          // alert('LOGIN EXITOSO --> Navegar a HOME');
          // Ponemos el _isLoggedIn a true
          this._authRegisterService.setisRegisterIn(true);
          // Dado que todo ha ido bien, navegamos a HOME
          this._routerRegister.navigate(["login"]);
          
        } else {
          alert(`Email: ${email} o Password: ${password} Erróneos`);
          // Ponemos el _isLoggedIn a false
          this._authRegisterService.setisRegisterIn(false);
        }
      },
      (error: any) => {
        alert(`Ha habido algún error en el servidor: ${error}`);
        // Ponemos el _isLoggedIn a false
        this._authRegisterService.setisRegisterIn(false);
      },
      () => {
        console.log('Petición terminada con éxito');
      }
    );

  }

}

