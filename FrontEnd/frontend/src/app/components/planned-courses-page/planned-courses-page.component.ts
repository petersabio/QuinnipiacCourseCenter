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

//       if (this.isAdvisor) {
//         for (var user of this.users) {
//           if (user.advisorID == this.advisorId) {
//             this.advisees.push(user);
//           }
//         }
//       }
      console.log("advisee list: ");
      console.log(this.advisees);
//       localStorage.setItem("currentStudent", );
//       this.username = localStorage.getItem("activeUser")!;
    });

    this.currentStudent = "all";
  }

  getAdvisees() {
    this.userService.getUsers().subscribe((data: Array<User>) => {
      console.log(data);
      this.users = data;

      if (this.isAdvisor) {
        for (var user of this.users) {
          if (user.advisorID == this.advisorId) {
            this.advisees.push(user);
          }
        }
      }
      console.log("advisee list: ");
      console.log(this.advisees);
    });

  }

}
