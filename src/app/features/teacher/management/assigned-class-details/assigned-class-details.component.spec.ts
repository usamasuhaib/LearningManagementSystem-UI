import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedClassDetailsComponent } from './assigned-class-details.component';

describe('AssignedClassDetailsComponent', () => {
  let component: AssignedClassDetailsComponent;
  let fixture: ComponentFixture<AssignedClassDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignedClassDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssignedClassDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
