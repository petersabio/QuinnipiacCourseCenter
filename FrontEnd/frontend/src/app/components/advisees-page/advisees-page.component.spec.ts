import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviseesPageComponent } from './advisees-page.component';

describe('AdviseesPageComponent', () => {
  let component: AdviseesPageComponent;
  let fixture: ComponentFixture<AdviseesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdviseesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdviseesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
