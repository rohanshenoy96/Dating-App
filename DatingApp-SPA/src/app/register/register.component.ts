import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userRegisterData: any = {};
  @Output() cancelRegisterEvent = new EventEmitter<any>();
  
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register(registerForm: NgForm) {
    if(registerForm.valid) {
      this.authService.register(this.userRegisterData)
        .subscribe(
          (data) => {
            console.log("User Registered");
          },
          (error) => {
            console.log(error);
          }
        )
    }
  }
  
  cancelRegister() {
    this.cancelRegisterEvent.emit(false);
  }

}
