import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSubjectDialogComponent } from './delete-subject-dialog.component';

describe('DeleteSubjectDialogComponent', () => {
  let component: DeleteSubjectDialogComponent;
  let fixture: ComponentFixture<DeleteSubjectDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteSubjectDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteSubjectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
