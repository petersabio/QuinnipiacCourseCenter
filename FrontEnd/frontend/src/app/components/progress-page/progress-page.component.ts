import { Component } from '@angular/core';

import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { LoginserviceService } from 'src/app/service/loginservice.service';
import { PlannedCourseService } from 'src/app/service/planned-course.service';
import { PlannedCourse } from 'src/app/model/planned-course';

@Component({
  selector: 'app-progress-page',
  templateUrl: './progress-page.component.html',
  styleUrls: ['./progress-page.component.css']
})
export class ProgressPageComponent {

  plannedCourses!: PlannedCourse[];

   constructor(private userService: UserService, private loginservice: LoginserviceService, private plannedCourseService: PlannedCourseService) { }

   users!: Array<User>;
   currentUser!: object;
   username!: String;
   name!: String;
   major!: String;
   minor!: String;
   gpa!: number;
   credits!: number;


   ngOnInit() {
     this.userService.getUsers().subscribe((data: Array<User>) => {
      console.log(data);
      this.users = data;
      this.username = localStorage.getItem("activeUser")!;
      this.getCurrentUserInfo(this.username);
     });

     this.plannedCourseService.getPlannedCourses().subscribe((data: PlannedCourse[]) => {
      console.log(data);
      this.plannedCourses = data;
    });

   }

   getCurrentUserInfo(username: String) {
      for (var User of this.users) {
        if (User.username == username) {
          this.loginservice.loginUser(User).subscribe(data => {
            this.currentUser = data;
            this.name = User.name;
            this.major = User.major;
            this.minor = User.minor;
            this.gpa = User.gpa;
            this.credits = User.credits;
          });
          break;
        }
      }
   }



}
