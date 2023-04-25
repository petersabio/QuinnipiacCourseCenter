import { Component } from '@angular/core';

import { Course } from '../../model/course';
import { courseService } from '../../service/course-service.service';
import { PlannedCourse } from 'src/app/model/planned-course';
import { PlannedCourseService } from 'src/app/service/planned-course.service';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-planned-courses-page',
  templateUrl: './planned-courses-page.component.html',
  styleUrls: ['./planned-courses-page.component.css']
})
export class PlannedCoursesPageComponent {

  plannedCourses!: PlannedCourse[];
  users!: Array<User>;
  advisees!: Array<User>;
  advisorId!: number;
  username!: string;
  currentStudent!: string;
  studentName!: string;
  student!: User;
  isAdvisor!: Boolean;

  constructor(private courseService: courseService, private plannedCourseService: PlannedCourseService, private userService: UserService) {}

  ngOnInit() {
    this.plannedCourseService.getPlannedCourses().subscribe((data: PlannedCourse[]) => {
      console.log(data);
      this.plannedCourses = data;
    });

    this.userService.getUsers().subscribe((data: Array<User>) => {
      console.log(data);
      this.users = data;
      for (var user of this.users) {
        if (user.username == localStorage.getItem("activeUser")!) {
          if (user.usertype == 1) {
            this.isAdvisor = true;
            this.advisees = new Array<User>();
            this.getAdvisees();
          } else {
            this.isAdvisor = false;
          }
          this.username = user.username;
          this.advisorId = user.advisorID;
          break;
        }
      }
      console.log("current user:");
      console.log(this.username);
      console.log("advisor id:");
      console.log(this.advisorId);

      console.log("advisee list: ");
      console.log(this.advisees);
    });

    this.currentStudent = "all";
    if (!this.isAdvisor) {
      this.studentName = localStorage.getItem("activeUser")!;
    }
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
  }

  goBack() {
    window.location.reload();
   }

}
