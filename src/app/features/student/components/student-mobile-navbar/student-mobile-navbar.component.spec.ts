import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMobileNavbarComponent } from './student-mobile-navbar.component';

describe('StudentMobileNavbarComponent', () => {
  let component: StudentMobileNavbarComponent;
  let fixture: ComponentFixture<StudentMobileNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentMobileNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentMobileNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
