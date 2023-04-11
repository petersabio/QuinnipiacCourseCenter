import { Component } from '@angular/core';

import { Course } from 'src/app/model/course';
import { courseService } from 'src/app/service/course-service.service';
import { PlannedCourse } from 'src/app/model/planned-course';
import { PlannedCourseService } from 'src/app/service/planned-course.service';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-term-calendar',
  templateUrl: './term-calendar.component.html',
  styleUrls: ['./term-calendar.component.css']
})
export class TermCalendarComponent {

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

    getCourseTime(courseCode: String): number {
      var courseTime = 0;
      for (var Course of this.courses) {
        if (Course.coursecode == courseCode) {
          courseTime = Course.time;
        }
      }
      return courseTime;
    }

    getCourseAtTime(time: number): String {
      var courseCode = "";
      for (var PlannedCourse of this.plannedCourses) {
        for (var Course of this.courses) {
          if (PlannedCourse.coursecode == Course.coursecode && Course.time == time) {
            courseCode = Course.coursecode;
          }
        }
      }
      return courseCode;
    }
}
