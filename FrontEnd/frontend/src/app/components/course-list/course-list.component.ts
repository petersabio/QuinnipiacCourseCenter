import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/course';
import { courseService } from '../../service/course-service.service';
import { CommonModule } from "@angular/common";


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses!: Course[];
  constructor(private courseService: courseService) {}

  ngOnInit() {
    this.courseService.getCourses().subscribe((data: Course[]) => {
      console.log(data);
      this.courses = data;
    });
  }
}
