import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FormServiceService } from './form-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuardGuard implements CanActivate {

  constructor(
    public formService: FormServiceService,
    public router: Router,
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.formService.isLoggedIn !== true) {
        this.router.navigate(['/login'])
      }

      const isAuthorized = this.formService.user.Role.includes(route.data.role);
      if(!isAuthorized){
        this.formService.showUnauthorizeMsg();
      } else {
        this.formService.accountStatus = false;
        this.formService.userStatus = true;
        this.formService.cartShow = true;
      }
      return isAuthorized;
  }

}
