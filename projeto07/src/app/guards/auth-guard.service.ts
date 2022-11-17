import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login-usuario/auth.service';

@Injectable({
  providedIn: 'root'
})
class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.authService.usuarioEstaAutenticado()) {
      return true
    }
    this.router.navigate(['/'])
    return false
  }
}

export { AuthGuardService }
export default { AuthGuardService }
