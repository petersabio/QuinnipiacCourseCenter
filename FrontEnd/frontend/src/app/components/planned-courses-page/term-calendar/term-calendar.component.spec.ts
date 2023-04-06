import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermCalendarComponent } from './term-calendar.component';

describe('TermCalendarComponent', () => {
  let component: TermCalendarComponent;
  let fixture: ComponentFixture<TermCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
