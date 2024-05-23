import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignTeacherDialogComponent } from './assign-teacher-dialog.component';

describe('AssignTeacherDialogComponent', () => {
  let component: AssignTeacherDialogComponent;
  let fixture: ComponentFixture<AssignTeacherDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignTeacherDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssignTeacherDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
