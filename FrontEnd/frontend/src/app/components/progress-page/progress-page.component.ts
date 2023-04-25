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
   advisees!: Array<User>;
   advisorId!: number;
   isAdvisor!: Boolean;
   currentStudent!: string;
   studentName!: string;
   student!: User;
   currentUser!: object;
   username!: String;
   name!: String;
   major!: String;
   minor!: String;
   gpa!: number;
   credits!: number;


   ngOnInit() {

    this.currentStudent = "all";
    if (!this.isAdvisor) {
      this.studentName = localStorage.getItem("activeUser")!;
      this.username = localStorage.getItem("activeUser")!;
    }

    this.userService.getUsers().subscribe((data: Array<User>) => {
      console.log(data);
      this.users = data;
      for (var user of this.users) {
        if (user.username == this.username) {
          if (user.usertype == 1) {
            this.isAdvisor = true;
            this.advisees = new Array<User>();
            this.getAdvisees();
          } else {
            this.isAdvisor = false;
          }
          //this.username = user.username;
          this.advisorId = user.advisorID;
          break;
        }
      }

      this.getCurrentUserInfo(this.username);
    });

    this.plannedCourseService.getPlannedCourses().subscribe((data: PlannedCourse[]) => {
      //console.log(data);
      this.plannedCourses = data;
    });

   }

   getAdvisees() {
    this.userService.getUsers().subscribe((data: Array<User>) => {
      console.log(data);
      this.users = data;

      if (this.isAdvisor) {
        for (var user of this.users) {
          if (user.advisorID == this.advisorId && user.usertype == 0) {
            this.advisees.push(user);
          }
        }
      }
      console.log("advisee list: ");
      console.log(this.advisees);
    });

  }

  seeStudentPlannedCoursePage(advisee: User) {
    this.studentName = advisee.name;
    this.currentStudent = advisee.username;
    this.student = advisee;
    console.log("selected student");
    console.log(this.student);
    localStorage.setItem("currentStudent", advisee.username);
    this.getCurrentUserInfo(this.username);
  }

   getCurrentUserInfo(username: String) {
      for (var User of this.users) {
          if (User.usertype == 1 && User.username == this.username) {
            this.name = this.student.name;
            this.major= this.student.major;
            this.minor = this.student.minor;
            this.gpa = this.student.gpa;
            this.credits = this.student.gpa;
            break;
          } else if (User.usertype == 0 && User.username == localStorage.getItem("activeUser")) {
            console.log("user info:");
            console.log(User.name);
            console.log(User);
            this.name = User.name;
            this.major = User.major;
            this.minor = User.minor;
            this.gpa = User.gpa;
            this.credits = User.credits;
            break;
          }

      }
   }

   goBack() {
    window.location.reload();
   }



}
