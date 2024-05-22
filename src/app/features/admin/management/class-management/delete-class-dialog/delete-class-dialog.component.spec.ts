import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteClassDialogComponent } from './delete-class-dialog.component';

describe('DeleteClassDialogComponent', () => {
  let component: DeleteClassDialogComponent;
  let fixture: ComponentFixture<DeleteClassDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteClassDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteClassDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
