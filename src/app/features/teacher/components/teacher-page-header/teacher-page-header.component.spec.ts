import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherPageHeaderComponent } from './teacher-page-header.component';

describe('TeacherPageHeaderComponent', () => {
  let component: TeacherPageHeaderComponent;
  let fixture: ComponentFixture<TeacherPageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherPageHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
