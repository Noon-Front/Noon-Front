import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FormServiceService } from './form-service.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {

  constructor(
    public formService: FormServiceService,
    public router: Router,
  ) { }



  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.formService.isAdminLoggedIn !== true) {
        this.router.navigate(['/adminLogin'])
      }

      const isAuthorized = this.formService.user.Role.includes(route.data.role);
      if(!isAuthorized){
        this.formService.showUnauthorizeMsg();
      } else {
        this.formService.accountStatus = false;
        this.formService.userStatus = false;
        this.formService.adminOrSeller = true;
        this.formService.cartShow = false;
      }
      return isAuthorized;
  }

}
