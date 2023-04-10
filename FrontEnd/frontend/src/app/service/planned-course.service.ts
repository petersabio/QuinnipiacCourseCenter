import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlannedCourse } from '../model/planned-course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlannedCourseService {
  private baseUrl="http://localhost:8080/api/planCourse"

  constructor(private httpclient: HttpClient) { }

  public planCourse(course:PlannedCourse): Observable<object>{
    console.log(course);
    return this.httpclient.post(`${this.baseUrl}`,course);
  }

}