import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherSideNavComponent } from './teacher-side-nav.component';

describe('TeacherSideNavComponent', () => {
  let component: TeacherSideNavComponent;
  let fixture: ComponentFixture<TeacherSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherSideNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
