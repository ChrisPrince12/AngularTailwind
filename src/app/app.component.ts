import { Component, OnInit } from '@angular/core';
import { CardsService } from './service/cards.service';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tailwindApplication';

  
  constructor(private authService: AuthService){}
  

  ngOnInit(): void {
    
  }



}
