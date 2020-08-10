import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  registerMode = false;
  constructor(private http: HttpClient) {}

  // tslint:disable-next-line: typedef
  ngOnInit() {
  this.getValues();

  }

  // tslint:disable-next-line: typedef
  registerToggle() {
  }


    cancelRegisterMode(registerMode: boolean) {
      this.registerMode = registerMode;
    }
}