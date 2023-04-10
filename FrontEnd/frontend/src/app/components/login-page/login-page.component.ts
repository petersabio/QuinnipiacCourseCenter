import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  public togglePanel: String = "left-active";

  constructor(private router: Router) { }

  login() {
    this.router.navigate(['home']);
  }

  loginPanelTrigger() {
    this.togglePanel = "left-active";
  }

  signupPanelTrigger() {
    this.togglePanel = "right-active";
  }

}
