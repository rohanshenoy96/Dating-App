import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  registerMode: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  registerToggle() {
    console.log("Toggle hit");
    this.registerMode = true;
  }

  cancelRegister(event: boolean) {
    this.registerMode = false;
  }

}
