import { Component } from '@angular/core';
import { Course } from '../../model/course';
import { courseService } from '../../service/course-service.service';
import { CommonModule } from "@angular/common";
import { PlannedCourse } from 'src/app/model/planned-course';
import { PlannedCourseService } from 'src/app/service/planned-course.service';

@Component({
  selector: 'app-course-catalog-page',
  templateUrl: './course-catalog-page.component.html',
  styleUrls: ['./course-catalog-page.component.css']
})
export class CourseCatalogPageComponent {

  public toggleDropdown: String = "non-active";
  public popupStatus: String = "close";
  public addOptions: String = "close";

  courses!: Course[];
  popupCourse!: Course;
  plannedCourse:PlannedCourse = new PlannedCourse;

  constructor(private courseService: courseService, private plannedcourseservice: PlannedCourseService) {}

  ngOnInit() {
    this.courseService.getCourses().subscribe((data: Course[]) => {
      console.log(data);
      this.courses = data;
    });
  }

  toggleSubject() {
    if (this.toggleDropdown == "subject-active") {
      this.toggleDropdown = "non-active"
    } else {
      this.toggleDropdown = "subject-active"
    }
  }

  toggleRequirement() {
    if (this.toggleDropdown == "requirement-active") {
          this.toggleDropdown = "non-active"
    } else {
          this.toggleDropdown = "requirement-active"
    }
  }

  toggleShareDropdown() {

  }

  toggleAddDropdown() {
    if (this.addOptions == "close") {
      this.addOptions = "open"
    } else {
      this.addOptions = "close"
    }
  }

  addCourseToCourseList() {
    this.plannedCourse.coursecode=this.popupCourse.coursecode
    this.plannedCourse.userName=localStorage.getItem("activeUser")!
    this.plannedCourse.semester = this.popupCourse.offsemester
    console.log(this.plannedCourse);

    this.plannedcourseservice.planCourse(this.plannedCourse).subscribe(data=>{
      alert("course succefully added");
    },error=> alert("failed to add Course"));
  }

  addCourseToSchedule() {

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

}
