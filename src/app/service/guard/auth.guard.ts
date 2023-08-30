import { AuthService } from '../auth/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private Router: Router, private authService: AuthService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url = state.url;
    var token = this.authService.getToken();
    if (token) {
      if (url.includes('login')) {
        this.Router.navigateByUrl('/');
        return false;
      } else {
        return true;
      }
    } else {
      if (url.includes('login')) {
        return true;
      } else {
        this.Router.navigateByUrl('/login');
        return false;
      }
    }
  }

}