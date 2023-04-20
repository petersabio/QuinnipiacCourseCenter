import { Component } from '@angular/core';

import { Course } from 'src/app/model/course';
import { courseService } from 'src/app/service/course-service.service';
import { PlannedCourse } from 'src/app/model/planned-course';
import { PlannedCourseService } from 'src/app/service/planned-course.service';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { LoginserviceService } from 'src/app/service/loginservice.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {

  constructor(private courseService: courseService, private plannedCourseService: PlannedCourseService, private userService: UserService, private loginservice: LoginserviceService) {}


  public popupStatus: String = "close";

  popupCourse!: Course;
  courses!: Course[];
  plannedCourses!: Array<PlannedCourse>;
  activeUserPlannedCourses!: Array<PlannedCourse>;
  users!: Array<User>;
  currentUser!: object;
  username!: String;

  ngOnInit() {
    this.courseService.getCourses().subscribe((data: Course[]) => {
      console.log(data);
      this.courses = data;
    });

    this.plannedCourseService.getPlannedCourses().subscribe((data: Array<PlannedCourse>) => {
      console.log(data);
      this.plannedCourses = data;
      this.activeUserPlannedCourses = new Array<PlannedCourse>();
      this.filterPlannedCoursesByUser();
    });

    this.userService.getUsers().subscribe((data: Array<User>) => {
      console.log(data);
      this.users = data;
      this.username = localStorage.getItem("activeUser")!;
      this.getCurrentUserInfo(this.username);
    });

  }

  getCurrentUserInfo(username: String) {
    for (var User of this.users) {
      if (User.username == username) {
        this.loginservice.loginUser(User).subscribe(data => {
          this.currentUser = data;
        });
        break;
      }
    }
  }

  getCourseName(courseCode: String): String {
    var courseName = "";
    for (var Course of this.courses) {
      if (Course.coursecode == courseCode) {
        courseName = Course.coursename;
      }
    }
    return courseName;
  }

  filterPlannedCoursesByUser() {
    for (var PlannedCourse of this.plannedCourses) {
      if (PlannedCourse.userName == this.username) {
        this.activeUserPlannedCourses.push(PlannedCourse);
      }
    }
    console.log("active user planned courses");
    console.log(this.activeUserPlannedCourses);
  }

  openCoursePopup(courseCode: String) {
    this.popupStatus = "open";
    for (var Course of this.courses) {
      if (Course.coursecode == courseCode) {
        this.popupCourse = Course;
      }
    }
    console.log(this.popupCourse);
  }

  closePopup() {
    this.popupStatus = "close";
  }

  removeFromCourseList() {

  }


}
