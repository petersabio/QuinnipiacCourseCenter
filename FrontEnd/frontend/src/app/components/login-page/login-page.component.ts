import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { CreateAccountService } from 'src/app/service/create-account.service';
import { LoginserviceService } from 'src/app/service/loginservice.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  user:User = new User();
  users!: Array<User>;

  public togglePanel: String = "left-active";

  constructor(private router: Router, private loginservice: LoginserviceService, private createAccountService: CreateAccountService, private userService: UserService) { }


  loginPanelTrigger() {
    this.togglePanel = "left-active";
  }

  signupPanelTrigger() {
    this.togglePanel = "right-active";
  }

  userLogin(){
    console.log("logged in user");
    console.log(this.user);
    console.log("logged in user name");
    console.log(this.user.username);
    this.loginservice.loginUser(this.user).subscribe(data=>{
      alert("login success")
      this.userService.getUsers().subscribe((data: Array<User>) => {
        console.log(data);
        this.users = data;
        for (var User of this.users) {
          if (User.username == this.user.username) {
            if (User.usertype != 2) {
              //this.loginservice.displayNavBar();
              this.router.navigate(['home']);
            } else {
              this.router.navigate(['admin']);
            }
          }
        }
      });

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
