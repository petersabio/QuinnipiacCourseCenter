import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  constructor(private router: Router) { }

  goToPlannedCoursesPage() {
    this.router.navigate(['planned-courses']);
  }

  goToProgressPage() {
    this.router.navigate(['progress']);
  }

  goToCourseCatalogPage() {
    this.router.navigate(['course-catalog']);
  }

  goToMessagingCenterPage() {
    this.router.navigate(['messaging-center']);
  }

}
