import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedSubjectsListComponent } from './assigned-subjects-list.component';

describe('AssignedSubjectsListComponent', () => {
  let component: AssignedSubjectsListComponent;
  let fixture: ComponentFixture<AssignedSubjectsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignedSubjectsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssignedSubjectsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
