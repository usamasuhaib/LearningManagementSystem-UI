import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherMobileNavbarComponent } from './teacher-mobile-navbar.component';

describe('TeacherMobileNavbarComponent', () => {
  let component: TeacherMobileNavbarComponent;
  let fixture: ComponentFixture<TeacherMobileNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherMobileNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherMobileNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
