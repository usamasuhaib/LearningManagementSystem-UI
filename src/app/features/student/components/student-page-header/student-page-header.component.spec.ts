import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPageHeaderComponent } from './student-page-header.component';

describe('StudentPageHeaderComponent', () => {
  let component: StudentPageHeaderComponent;
  let fixture: ComponentFixture<StudentPageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentPageHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
