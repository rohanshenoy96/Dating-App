import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login(loginForm: NgForm) {
    if(loginForm.valid) {
      this.authService.login(this.model)
        .subscribe(
          (data) => {
            console.log("Login Succcessfull")
          },
          (error) => {
            console.log(error);
          }
        )
    }
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }
  logout() {
    localStorage.removeItem('token');
    console.log('Logged Out');
  }

}
