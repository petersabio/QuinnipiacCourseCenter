import { Component } from '@angular/core';

@Component({
  selector: 'app-course-catalog-page',
  templateUrl: './course-catalog-page.component.html',
  styleUrls: ['./course-catalog-page.component.css']
})
export class CourseCatalogPageComponent {

  public toggleDropdown: String = "none-active";

  constructor() { }

  toggleSubject() {
    if (this.toggleDropdown == "subject-active") {
      this.toggleDropdown = "none-active"
    } else {
      this.toggleDropdown = "subject-active"
    }
  }

  toggleRequirement() {
    if (this.toggleDropdown == "requirement-active") {
          this.toggleDropdown = "none-active"
    } else {
          this.toggleDropdown = "requirement-active"
    }
  }

}
