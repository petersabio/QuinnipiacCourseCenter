import { TestBed } from '@angular/core/testing';

import { PlannedCourseService } from './planned-course.service';

describe('PlannedCourseService', () => {
  let service: PlannedCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlannedCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
