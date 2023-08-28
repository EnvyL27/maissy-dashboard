import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivate {
  constructor(private AuthService: AuthService, private Router: Router) { }
  user: any;
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url = state.url;
    this.user = this.AuthService.GetPayload();
    if (this.user && this.user.role === 'admin') {
      return true;
    } else {
      this.Router.navigateByUrl('/home');
      return false;
    }
  }

}