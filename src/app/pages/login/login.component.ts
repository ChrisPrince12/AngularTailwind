import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  passwordVisible: boolean = false
  cards: any
  typeOfText: string = "password"
  
  constructor(private authService: AuthService, private route: Router){}

  login(){
    console.log("Logged in");
    this.authService.setIsLogged(true)
    // navigate to dashboard page after successful authentication
    this.route.navigate(['/dashboard'])
  }

  showHide(){
    this.passwordVisible = !this.passwordVisible
    if(this.passwordVisible){
      this.typeOfText = "text"
    }else{
      this.typeOfText = "password"
    }
  }

}
