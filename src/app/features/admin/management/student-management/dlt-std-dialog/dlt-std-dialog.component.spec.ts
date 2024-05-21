import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DltStdDialogComponent } from './dlt-std-dialog.component';

describe('DltStdDialogComponent', () => {
  let component: DltStdDialogComponent;
  let fixture: ComponentFixture<DltStdDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DltStdDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DltStdDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
