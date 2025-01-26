import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  path: import('@angular/router').ActivatedRouteSnapshot[];
  route: import('@angular/router').ActivatedRouteSnapshot;

  constructor(public storage: StorageService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    
    if(!this.storage.getLocalUser()) {
     
      this.router.navigate(['/auth/login', {state: {redirect: state}}]);
    }
    
    return true;
  }
}
