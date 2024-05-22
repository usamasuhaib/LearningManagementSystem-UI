import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClassDialogComponent } from './add-class-dialog.component';

describe('AddClassDialogComponent', () => {
  let component: AddClassDialogComponent;
  let fixture: ComponentFixture<AddClassDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddClassDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddClassDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
