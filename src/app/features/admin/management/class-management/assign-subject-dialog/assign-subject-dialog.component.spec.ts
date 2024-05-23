import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignSubjectDialogComponent } from './assign-subject-dialog.component';

describe('AssignSubjectDialogComponent', () => {
  let component: AssignSubjectDialogComponent;
  let fixture: ComponentFixture<AssignSubjectDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignSubjectDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssignSubjectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
