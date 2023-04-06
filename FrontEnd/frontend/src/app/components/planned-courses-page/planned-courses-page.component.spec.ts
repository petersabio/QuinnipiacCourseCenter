import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannedCoursesPageComponent } from './planned-courses-page.component';

describe('PlannedCoursesPageComponent', () => {
  let component: PlannedCoursesPageComponent;
  let fixture: ComponentFixture<PlannedCoursesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlannedCoursesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlannedCoursesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
