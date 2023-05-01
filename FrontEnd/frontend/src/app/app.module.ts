import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PlannedCoursesPageComponent } from './components/planned-courses-page/planned-courses-page.component';
import { ProgressPageComponent } from './components/progress-page/progress-page.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { TermCalendarComponent } from './components/planned-courses-page/term-calendar/term-calendar.component';
import { CourseListComponent } from './components/planned-courses-page/course-list/course-list.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { CourseCatalogPageComponent } from './components/course-catalog-page/course-catalog-page.component';
import { MessagingCenterPageComponent } from './components/messaging-center-page/messaging-center-page.component';
import { HttpClientModule } from '@angular/common/http';
import { courseService } from './service/course-service.service';
import { PlannedCourseService } from './service/planned-course.service';
import { UserService } from './service/user.service';
import { FormsModule } from '@angular/forms';
import { CourseSearchFormComponent } from './components/course-catalog-page/course-search-form/course-search-form.component';
import { ProgressListComponent } from './components/progress-page/progress-list/progress-list.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    PlannedCoursesPageComponent,
    ProgressPageComponent,
    TermCalendarComponent,
    CourseListComponent,
    LoginPageComponent,
    CourseCatalogPageComponent,
    MessagingCenterPageComponent,
    CourseSearchFormComponent,
    ProgressListComponent,
    AdminPageComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [courseService, PlannedCourseService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule { }
