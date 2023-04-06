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

  constructor(private http: HttpClient) {}

  public getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseUrl}`);
  }
}