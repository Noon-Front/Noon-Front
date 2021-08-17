import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot,
UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormServiceService } from './form-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthSellerGuard implements CanActivate {

  constructor(
    public formService: FormServiceService,
    public router: Router,
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.formService.isSellerLoggedIn !== true) {
      window.alert("You must be logged in as Seller");
      this.router.navigate(['/sellerLogin'])
    }
    return true;
  }
}
