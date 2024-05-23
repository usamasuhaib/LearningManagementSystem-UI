import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSubjectsListComponent } from './student-subjects-list.component';

describe('StudentSubjectsListComponent', () => {
  let component: StudentSubjectsListComponent;
  let fixture: ComponentFixture<StudentSubjectsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentSubjectsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentSubjectsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
