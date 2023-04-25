import { Component } from '@angular/core';

import { Course } from 'src/app/model/course';
import { courseService } from 'src/app/service/course-service.service';
import { PlannedCourse } from 'src/app/model/planned-course';
import { PlannedCourseService } from 'src/app/service/planned-course.service';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { LoginserviceService } from 'src/app/service/loginservice.service';

@Component({
  selector: 'app-term-calendar',
  templateUrl: './term-calendar.component.html',
  styleUrls: ['./term-calendar.component.css']
})
export class TermCalendarComponent {

    courses!: Course[];
    plannedCourses!: Array<PlannedCourse>;
    activeUserPlannedCourses!: Array<PlannedCourse>;
    currentSemesterPlannedCourses!: Map<number, string>;
    currentSemesterPlannedCoursesDays!: Map<number, number>;
    users!: User[];
    currentUser!: string;
    username!: String;
    currentSemester!: String;
    isAtTime!: Array<Boolean>;
    isOnMonday!: Array<Boolean>;
    isOnTuesday!: Array<Boolean>;
    isOnWednesday!: Array<Boolean>;
    isOnThursday!: Array<Boolean>;
    isOnFriday!: Array<Boolean>;

    constructor(private courseService: courseService, private plannedCourseService: PlannedCourseService, private userService: UserService, private loginservice: LoginserviceService) {}

    ngOnInit() {

      this.userService.getUsers().subscribe((data: User[]) => {
        console.log(data);
        this.users = data;
        this.username = localStorage.getItem("activeUser")!;
        this.getCurrentUserInfo(this.username);
      });

      this.pageSetup();
    }

//     ngOnChanges() {
//       this.pageSetup();
//     }

    pageSetup() {
      this.courseService.getCourses().subscribe((data: Course[]) => {
        console.log(data);
        this.courses = data;

        this.plannedCourseService.getPlannedCourses().subscribe((data: Array<PlannedCourse>) => {
          console.log(data);
          this.plannedCourses = data;
          this.activeUserPlannedCourses = new Array<PlannedCourse>();
          this.currentSemesterPlannedCourses = new Map();
          this.filterPlannedCoursesByUser(this.username);
          this.setUpSchedule();

        });
      });

      this.currentSemester = "Spring";
      this.clearSchedule();
    }


    getCurrentUserInfo(username: String) {
      for (var User of this.users) {
        if (User.username == this.username) {
          if (User.usertype == 1) {
            this.username = localStorage.getItem("currentStudent")!;
          }
          break;
        }
      }
    }

    getCourseTime(courseCode: String): string { //not working
      var courseTime = "";
      for (var Course of this.courses) {
        if (Course.coursecode == courseCode) {
          courseTime = Course.time;
          console.log("course time:");
          console.log(courseTime);
        }
      }
      return courseTime;
    }

    filterPlannedCoursesByUser(username: String) {
      for (var PlannedCourse of this.plannedCourses) {
        console.log("planned course username:");
        console.log(PlannedCourse.userName);
        if (PlannedCourse.userName == this.username && PlannedCourse.semester != "Freshman" && PlannedCourse.semester != "Sophmore" && PlannedCourse.semester != "Junior" && PlannedCourse.semester != "Senior") {
          console.log("course code:");
          console.log(PlannedCourse.coursecode);
          this.activeUserPlannedCourses.push(PlannedCourse);
        }
      }
      console.log("active user planned courses");
      console.log(this.username);
      console.log(this.activeUserPlannedCourses);
    }

    setUpSchedule() {
      for (var PlannedCourse of this.activeUserPlannedCourses) {
        if (PlannedCourse.semester == this.currentSemester) {
          this.courseService.getCourses().subscribe((data: Course[]) => {
            console.log("all courses:")
            console.log(data);
            this.courses = data;
          });
          for (var Course of this.courses) {
            if (Course.coursecode == PlannedCourse.coursecode) {
              console.log("course match... ");
              console.log(Course.coursecode);
              console.log(Course.time);
              var timeCode = -1;
              if (Course.time == "08:00:00") {
                timeCode = 0;
              } else if (Course.time == "08:30:00") {
                timeCode = 1;
              } else if (Course.time == "09:00:00") {
                timeCode = 2;
              } else if (Course.time == "09:30:00") {
                timeCode = 3;
              } else if (Course.time == "10:00:00") {
                timeCode = 4;
              } else if (Course.time == "10:30:00") {
                timeCode = 5;
              } else if (Course.time == "11:00:00") {
                timeCode = 6;
              } else if (Course.time == "11:30:00") {
                timeCode = 7;
              } else if (Course.time == "12:00:00") {
                timeCode = 8;
              } else if (Course.time == "12:30:00") {
                timeCode = 9;
              } else if (Course.time == "01:00:00") {
                timeCode = 10;
              } else if (Course.time == "01:30:00") {
                timeCode = 11;
              } else if (Course.time == "02:00:00") {
                timeCode = 12;
              } else if (Course.time == "02:30:00") {
                timeCode = 13;
              } else if (Course.time == "03:00:00") {
                timeCode = 14;
              } else if (Course.time == "03:30:00") {
                timeCode = 15;
              } else if (Course.time == "04:00:00") {
                timeCode = 16;
              } else if (Course.time == "04:30:00") {
                timeCode = 17;
              } else if (Course.time == "05:00:00") {
                timeCode = 18;
              } else if (Course.time == "05:30:00") {
                timeCode = 19;
              } else if (Course.time == "06:00:00") {
                timeCode = 20;
              } else if (Course.time == "06:30:00") {
                timeCode = 21;
              }

              if (timeCode != -1) {
                this.currentSemesterPlannedCourses.set(timeCode, Course.coursecode);
                this.isAtTime[timeCode] = true;
                if (Course.days == 1) {
                  this.isOnMonday[timeCode] = true;
                  this.isOnTuesday[timeCode] = false;
                  this.isOnWednesday[timeCode] = false;
                  this.isOnThursday[timeCode] = false;
                  this.isOnFriday[timeCode] = false;
                } else if (Course.days == 2) {
                  this.isOnMonday[timeCode] = false;
                  this.isOnTuesday[timeCode] = true;
                  this.isOnWednesday[timeCode] = false;
                  this.isOnThursday[timeCode] = false;
                  this.isOnFriday[timeCode] = false;
                } else if (Course.days == 3) {
                  this.isOnMonday[timeCode] = false;
                  this.isOnTuesday[timeCode] = false;
                  this.isOnWednesday[timeCode] = true;
                  this.isOnThursday[timeCode] = false;
                  this.isOnFriday[timeCode] = false;
                } else if (Course.days == 4) {
                  this.isOnMonday[timeCode] = false;
                  this.isOnTuesday[timeCode] = false;
                  this.isOnWednesday[timeCode] = false;
                  this.isOnThursday[timeCode] = true;
                  this.isOnFriday[timeCode] = false;
                } else if (Course.days == 5) {
                  this.isOnMonday[timeCode] = false;
                  this.isOnTuesday[timeCode] = false;
                  this.isOnWednesday[timeCode] = false;
                  this.isOnThursday[timeCode] = false;
                  this.isOnFriday[timeCode] = true;
                } else if (Course.days == 6) {
                  this.isOnMonday[timeCode] = false;
                  this.isOnTuesday[timeCode] = true;
                  this.isOnWednesday[timeCode] = false;
                  this.isOnThursday[timeCode] = true;
                  this.isOnFriday[timeCode] = false;
                } else if (Course.days == 7) {
                  this.isOnMonday[timeCode] = true;
                  this.isOnTuesday[timeCode] = false;
                  this.isOnWednesday[timeCode] = true;
                  this.isOnThursday[timeCode] = false;
                  this.isOnFriday[timeCode] = false;
                } else if (Course.days == 8) {
                  this.isOnMonday[timeCode] = true;
                  this.isOnTuesday[timeCode] = false;
                  this.isOnWednesday[timeCode] = true;
                  this.isOnFriday[timeCode] = true;
                  this.isOnThursday[timeCode] = false;
                }
              }

            }
          }
        }
      }
      console.log("current semester planned courses");
      console.log(this.currentSemesterPlannedCourses);
    }

    clearSchedule() {
      this.isAtTime = new Array(22).fill(false);
      console.log("isAtTime Array: ");
      console.log(this.isAtTime);

      this.isOnMonday = new Array(22).fill(false);
      this.isOnTuesday = new Array(22).fill(false);
      this.isOnWednesday = new Array(22).fill(false);
      this.isOnThursday = new Array(22).fill(false);
      this.isOnFriday = new Array(22).fill(false);
    }

    isAtTimeAndDay(timeCode: number, day: string): Boolean {
      var result = false;
      if (this.isAtTime[timeCode]) {
        if (day == "Monday") {
          if (this.isOnMonday[timeCode]) {
            result = true;
          }
        } else if (day == "Tuesday") {
          if (this.isOnTuesday[timeCode]) {
            result = true;
          }
        } else if (day == "Wednesday") {
          if (this.isOnWednesday[timeCode]) {
            result = true;
          }
        } else if (day == "Thursday") {
          if (this.isOnThursday[timeCode]) {
            result = true;
          }
        } else if (day == "Friday") {
          if (this.isOnFriday[timeCode]) {
            result = true;
          }
        }
      }

      return result;
    }

    nextTerm() {
      this.clearSchedule();
      this.setUpSchedule();
    }

}
