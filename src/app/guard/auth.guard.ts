import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad{

  constructor(private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (localStorage.getItem('access_token')) {
      return true;
    } else {
      this.router.navigate(['lazy-load-module/login'], { queryParams: { returnUrl: state.url}});
      return false;
    }
  }

  canLoad(){
    if (localStorage.getItem('access_token')) {
      return true;
    } else {
      this.router.navigate(['lazy-load-module/login']);
      return false;
    }
  }
}
