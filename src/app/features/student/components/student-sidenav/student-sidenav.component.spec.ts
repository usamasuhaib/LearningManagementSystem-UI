import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSidenavComponent } from './student-sidenav.component';

describe('StudentSidenavComponent', () => {
  let component: StudentSidenavComponent;
  let fixture: ComponentFixture<StudentSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentSidenavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
