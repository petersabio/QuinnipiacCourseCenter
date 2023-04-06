import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagingCenterPageComponent } from './messaging-center-page.component';

describe('MessagingCenterPageComponent', () => {
  let component: MessagingCenterPageComponent;
  let fixture: ComponentFixture<MessagingCenterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagingCenterPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagingCenterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
