import { Component } from '@angular/core';

import { Course } from 'src/app/model/course';
import { courseService } from 'src/app/service/course-service.service';
import { PlannedCourse } from 'src/app/model/planned-course';
import { PlannedCourseService } from 'src/app/service/planned-course.service';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {

  public popupStatus: String = "close";

  popupCourse!: Course;
  courses!: Course[];
  plannedCourses!: PlannedCourse[];
  users!: User[];

  constructor(private courseService: courseService, private plannedCourseService: PlannedCourseService, private userService: UserService) {}

  ngOnInit() {
    this.courseService.getCourses().subscribe((data: Course[]) => {
      console.log(data);
      this.courses = data;
    });

    this.plannedCourseService.getPlannedCourses().subscribe((data: PlannedCourse[]) => {
      console.log(data);
      this.plannedCourses = data;
    });

    this.userService.getUsers().subscribe((data: User[]) => {
      console.log(data);
      this.users = data;
    });

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
