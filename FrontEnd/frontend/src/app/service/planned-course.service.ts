import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlannedCourse } from '../model/planned-course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlannedCourseService {
  private baseUrl="http://localhost:8080/api/planCourse"
  private plannedCoursesListUrl="http://localhost:8080/api/plannedCourses"

  constructor(private httpClient: HttpClient) { }

  planCourse(course:PlannedCourse): Observable<object>{
    console.log(course);
    console.log("test");
    return this.httpClient.post(`${this.baseUrl}`,course);
  }

  public getPlannedCourses(): Observable<PlannedCourse[]> {
    return this.httpClient.get<PlannedCourse[]>(`${this.plannedCoursesListUrl}`);
  }

}
