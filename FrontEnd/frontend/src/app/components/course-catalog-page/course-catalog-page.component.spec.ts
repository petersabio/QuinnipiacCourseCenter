import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCatalogPageComponent } from './course-catalog-page.component';

describe('CourseCatalogPageComponent', () => {
  let component: CourseCatalogPageComponent;
  let fixture: ComponentFixture<CourseCatalogPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseCatalogPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseCatalogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
   
});
