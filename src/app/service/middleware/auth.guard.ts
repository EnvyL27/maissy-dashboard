import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private AuthService: AuthService, private Router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url = state.url;
    if (this.AuthService.GetToken()) {
      if (url.includes('login') || url.includes('register')) {
        this.Router.navigateByUrl('/dashboard');
        return false;
      } else {
        return true;
      }
    } else {
      if (url.includes('login') || url.includes('register')) {
        return true;
      } else {
        this.Router.navigateByUrl('/login');
        return false;
      }
    }
  }

}