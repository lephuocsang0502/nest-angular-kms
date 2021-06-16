import { Route } from '@angular/compiler/src/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication-services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  entries=[
    {
      name:'Login',
      link:'login'
    },
    {
      name:'Register',
      link:'register'
    },
    {
      name:'Update Profile',
      link:'update-profile'
    }
  ]
  constructor(private router: Router, private authService:AuthenticationService){}
  
  navigateTo(value){
    this.router.navigate(['../',value]);
  }

  logout(){
    this.authService.logout();
  }
}
