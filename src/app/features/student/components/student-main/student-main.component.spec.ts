import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMainComponent } from './student-main.component';

describe('StudentMainComponent', () => {
  let component: StudentMainComponent;
  let fixture: ComponentFixture<StudentMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
