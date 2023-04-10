import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlannedCourse } from '../model/planned-course';

@Injectable({
  providedIn: 'root'
})
export class PlanCourseService {

  constructor(private httpClient: HttpClient) { }

  planCourse(course: PlannedCourse){
    console.log(course);
  }
}
