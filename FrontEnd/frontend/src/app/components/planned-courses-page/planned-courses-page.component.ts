import { Component } from '@angular/core';

import { Course } from '../../model/course';
import { courseService } from '../../service/course-service.service';
import { PlannedCourse } from 'src/app/model/planned-course';
import { PlannedCourseService } from 'src/app/service/planned-course.service';


@Component({
  selector: 'app-planned-courses-page',
  templateUrl: './planned-courses-page.component.html',
  styleUrls: ['./planned-courses-page.component.css']
})
export class PlannedCoursesPageComponent {

  plannedCourses!: PlannedCourse[];

  constructor(private courseService: courseService, private plannedCourseService: PlannedCourseService) {}

  ngOnInit() {
    this.plannedCourseService.getPlannedCourses().subscribe((data: PlannedCourse[]) => {
      console.log(data);
      this.plannedCourses = data;
    });
  }

}
