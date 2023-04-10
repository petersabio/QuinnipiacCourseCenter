import { TestBed } from '@angular/core/testing';

import { PlanCourseService } from './plan-course.service';

describe('PlanCourseService', () => {
  let service: PlanCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
