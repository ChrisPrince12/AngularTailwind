import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogged: boolean = false

  constructor(private route: Router) { }

  setIsLogged(loginState: boolean){
    this.isLogged = loginState;
    if(this.isLogged){
      console.log("User logged in")
      const token = "UserIn"
      localStorage.setItem('Logged', token)
    }
  }

  getIsLogged(){
    return this.isLogged;
  }

  logout(){
    this.setIsLogged(false)
    localStorage.removeItem('Logged')
    this.route.navigate(['/login'])
  }
}
