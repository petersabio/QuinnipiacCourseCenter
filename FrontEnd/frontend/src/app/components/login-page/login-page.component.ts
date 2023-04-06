import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { CreateAccountService } from 'src/app/service/create-account.service';
import { LoginserviceService } from 'src/app/service/loginservice.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  user:User = new User();

  public togglePanel: String = "left-active";

  constructor(private router: Router, private loginservice: LoginserviceService, private createAccountService: CreateAccountService ) { }
  

  loginPanelTrigger() {
    this.togglePanel = "left-active";
  }

  signupPanelTrigger() {
    this.togglePanel = "right-active";
  }

  userLogin(){
    console.log(this.user)
    this.loginservice.loginUser(this.user).subscribe(data=>{
      alert("login success")
      this.router.navigate(['home']);
      localStorage.setItem('activeUser',this.user.username);
    },error=>{
      alert("login Failed Please Make Sure Username and Password are Correct")
    })
  }

  userSignUp(){
    console.log(this.user);
    this.createAccountService.createUser(this.user).subscribe(data=>{
      alert("Successfully Added User")
      this.router.navigate(['home']);
      localStorage.setItem('activeUser',this.user.username);
    },error=> alert("User Not Added"));
  }

}
