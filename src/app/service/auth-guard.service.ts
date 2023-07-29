import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate  {

  constructor(private authService: AuthService, private route: Router) { }


  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   
   const loginToken = localStorage.getItem('Logged')
    if(loginToken){
      return true
    }else{
      this.route.navigate(['/login'])
      return false
    }
  }
   
}
