import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PlannedCoursesPageComponent } from './components/planned-courses-page/planned-courses-page.component';
import { ProgressPageComponent } from './components/progress-page/progress-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { CourseCatalogPageComponent } from './components/course-catalog-page/course-catalog-page.component';
import { MessagingCenterPageComponent } from './components/messaging-center-page/messaging-center-page.component';
import { CourseSearchFormComponent } from './components/course-catalog-page/course-search-form/course-search-form.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'planned-courses', component: PlannedCoursesPageComponent },
  { path: 'progress', component: ProgressPageComponent },
  { path: 'course-catalog', component: CourseCatalogPageComponent },
  { path: 'messaging-center', component: MessagingCenterPageComponent },
  { path: 'admin', component: AdminPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
