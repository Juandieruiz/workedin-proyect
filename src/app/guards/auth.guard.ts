import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _router: Router, private _authService: AuthService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // Dependiendo de lo que deveulva este guard en esta función (true o false)
    // Aquellas rutas que en el routing.module.ts tengan el canActivate asociado a este guard
    // podrán cargarse o no.
    // Por defecto, devuelve true
    // * Si devuelve true --> Puede navegarse a la ruta
    // * Si devuelve false --> No permite que se navegue a esa ruta

    if(this._authService.isLoggedIn){
      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }

  }

}
