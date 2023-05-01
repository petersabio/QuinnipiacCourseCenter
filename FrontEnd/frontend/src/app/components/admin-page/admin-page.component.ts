import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/model/course';
import { courseService } from 'src/app/service/course-service.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit{
  
  course: Course = new Course();

  constructor(private courseService: courseService) {}

  ngOnInit(): void {
    
  }

  addCourse(){
    //console.log(this.course);
    this.courseService.addCourse(this.course).subscribe(data =>{
      alert("Course Succesfully Added");
    },error =>alert("Course Not Added"));
  }

  removeCourse(){
    this.courseService.removeCourse(this.course).subscribe(data =>{
      alert("Course Succesfully Removed");
    },error => alert("Course Not Removed"))

  }

  // removeCourse(id: String){
  //   this.courseService.removeCourse(id).subscribe(data =>{
  //     console.log(data);
  //   })
  // }

}
