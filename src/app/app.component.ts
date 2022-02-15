import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoApp';
  log_email:any;
  log_password:any;
  reg_email:any;
  reg_password:any;
  reg_confirm_password:any;

  register() {

  }
  login() {

  }
}