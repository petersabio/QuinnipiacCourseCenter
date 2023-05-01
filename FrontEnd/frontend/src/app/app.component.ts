import { Component, ViewEncapsulation } from '@angular/core';
import { LoginserviceService } from 'src/app/service/loginservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  constructor(private loginservice: LoginserviceService) { }

  title = 'frontend';
  showNavBar: Boolean = false;

  ngOnInit() {
    this.loginservice.getEmittedValue().subscribe(item => this.showNavBar=item);
  }

}
