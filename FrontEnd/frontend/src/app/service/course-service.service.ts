import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Course } from '../model/course';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common'


@Injectable({
  providedIn: 'root'
})
export class courseService {

  private baseUrl ="http://localhost:8080/api/courses"
  private addUrl = "http://localhost:8080/api/addCourse"
  private removeUrl = "http://localhost:8080/api/removeCourse"

  constructor(private http: HttpClient) {}

  public getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseUrl}`);
  }

  public addCourse(course: Course):Observable<Object>{
    console.log(course);
    return this.http.post(`${this.addUrl}`,course)
  }

  public removeCourse(course: Course):Observable<Object>{
    return this.http.post(`${this.removeUrl}`,course)
  }

  // public removeCourse(id: String): Observable<object>{
  //   //return this.httpClient.delete(`${this.removeUrl}/${id}`);
  // }
}